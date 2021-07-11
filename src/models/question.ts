export class Question {
  constructor(
    public label: string,
    public options: Option[],
    public category: Category
  ) {}
}

export class Option {
  constructor(public label: string, public personality: Personality) {}
}

export enum Category {
  IE = 1, // interoversion extroversion
  SI = 2, // sensing intuition
  TF = 3, // thinking feeling
  JP = 4 // judging perceiving
}

export enum Personality {
  Interoversion = 'I',
  Extroversion = 'E',
  Sensing = 'S',
  Intuition = 'N',
  Thinking = 'T',
  Feeling = 'F',
  Judging = 'J',
  Perceiving = 'P'
}
