import { IQuestion } from 'src/app/interfaces/question.interface';
export interface IUser {
  id: string;
  name: string;
  email: string;
  questions: IQuestion[];
}
