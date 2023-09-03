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