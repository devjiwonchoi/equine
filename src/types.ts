export type GameVariant =
  | 'standard'
  | 'chess960'
  | 'crazyhouse'
  | 'antichess'
  | 'atomic'
  | 'horde'
  | 'kingOfTheHill'
  | 'racingKings'
  | 'threeCheck'
  | 'fromPosition'

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

export type ChallengeAI = {
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  clockLimit?: number
  clockIncrement?: number
  days?: 1 | 2 | 3 | 5 | 7 | 10 | 14
  color?: 'white' | 'black' | 'random'
  variant?: GameVariant
  fen?: string
}

export type ChallengeOpen = {
  rated?: boolean
  name?: string
  rules?: string
  users?: string | string[]
  expiresAt?: number
} & Omit<ChallengeAI, 'level'>

export type StudyExport = {
  studyId?: string
  chapterId?: string
  username?: string
  clocks?: boolean
  comments?: boolean
  variations?: boolean
  source?: boolean
  orientation?: boolean
}

export type StudyImport = {
  studyId: string
  name: string
  pgn: string
  orientation?: string
  variant?: string
}
