import { LICHESS_API_URL } from './constants'

/// Processes a text-decoded stream and tries to parse it into JSON.
export class JSONStream extends TransformStream {
    constructor() {
        super({
            start() {},
            flush() {},
            async transform(chunk: string, controller: TransformStreamDefaultController) {
                if (chunk.trim() === '') {
                    controller.enqueue({})
                } else {
                    let parsed
                    try {
                        parsed = JSON.parse(chunk)
                    } catch (e) {
                        controller.error(`Error parsing JSON: ${e}`)
                        parsed = chunk
                    }

                    controller.enqueue(parsed)
                }
            }
        })
    }
}

/// LichessStream is responsible for handling all lichess API stream formats.
// export class LichessStream extends TransformStream {
//     constructor({ json = true }: { json?: boolean }) {
//         super({
//             start() {},
//             async transform(chunk: Uint8Array, controller: TransformStreamDefaultController) {
//                 // chunk = await chunk;
//                 let decoded = String(chunk);
//                 if (decoded.trim() === '') {
//                     controller.enqueue({});
//                 } else {
//                     let parsed;
//                     if (json) {
//                         try {
//                             parsed = JSON.parse(decoded);
//                         } catch (e) {
//                             controller.error(`Error parsing JSON: ${e}`);
//                             parsed = decoded;
//                         };
//                     } else {
//                         parsed = decoded;
//                     }
//                     controller.enqueue(parsed);
//                 }
//             },
//             flush() {}
//         });
//     }
// }

export async function streamer({
    endpoint,
    token,
    method = 'GET',
    body,
    json = true
}: {
    endpoint: string
    token: string
    method?: string
    body?: URLSearchParams
    json?: boolean
}) {
    return new Promise(async (resolve, reject) => {
        const fetchOptions = {
            headers: {
                Authorization: `Bearer ${token}`,
            }, 
            method,
            body,
        }
        fetch(`${LICHESS_API_URL}${endpoint}`, fetchOptions)
        .then(response => response.body)
        .then(stream => {
            if (stream == null) {
                return reject('Endpoint is not a stream, use fetcher instead.')
            }
            return stream.pipeThrough(new TextDecoderStream())
        })
        .then(stream => {
            if (!stream) {
                return reject('Error decoding stream')
            }
            if (json) {
                return stream.pipeThrough(new JSONStream())
            }
            return stream
        })
        .then(stream => resolve(stream))
        .catch(e => {
            return reject(`Error fetching API: ${e}`)
        })
    })
}

export async function fetcher({
    endpoint,
    token,
    method = 'GET',
        body,
}: {
    endpoint: string
    token: string
    method?: string
    body?: URLSearchParams
}) {
    try {
        const fetchOptions = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method,
            body,
        }
        const response = await fetch(`${LICHESS_API_URL}${endpoint}`, fetchOptions)
        const data = await response.json()

        return data
    } catch (error) {
        throw error
    }
}
