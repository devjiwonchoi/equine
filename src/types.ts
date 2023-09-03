export type LichessHeaders = { Authorization: string }

export type GetUsers = {
  ids: string | string[]
}

export type GetUser = {
  username?: string
  // TODO: descriptive perfType
  perfType?: string
  // TODO: seperate these types
  text?: string
  term?: string
  details?: boolean
  friendPrior?: boolean
}

export type BoardSeek = {
  mode: 'realtime' | 'correspondence'
  options: {
    rated?: boolean
    variant?: string
    color?: 'white' | 'black' | 'random'
    /**
     * 'number-number' format, regex: /^\d+-\d+$/
     */
    ratingRange?: string
    // realtime
    time?: number
    increment?: number
    // correspondence
    days?: 1 | 2 | 3 | 5 | 7 | 10 | 14
  }
}