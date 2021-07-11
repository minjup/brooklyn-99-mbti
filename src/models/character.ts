export class Character {
  constructor(
    public name: string,
    public mbti: MBTIType,
    public quote: string // public hate: string, // public like: string
  ) {}
}

export enum MBTIType {
  ISTJ = 'ISTJ',
  ISTP = 'ISTP',
  ISFJ = 'ISFJ',
  ISFP = 'ISFP',
  INFJ = 'INFJ',
  INFP = 'INFP',
  INTJ = 'INTJ',
  INTP = 'INTP',
  ESTP = 'ESTP',
  ESTJ = 'ESTJ',
  ESFP = 'ESFP',
  ESFJ = 'ESFJ',
  ENFP = 'ENFP',
  ENFJ = 'ENFJ',
  ENTP = 'ENTP',
  ENTJ = 'ENTJ',
}
