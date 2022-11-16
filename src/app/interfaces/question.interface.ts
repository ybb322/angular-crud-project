export interface IQuestion {
  id: number;
  title: string;
  description: string;
  tags: [];
  author: string;
  //TODO fix the type
  date: string;
  //TODO fix the type
  answers: object[];
}
