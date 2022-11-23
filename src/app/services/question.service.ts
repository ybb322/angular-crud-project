import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  editedQuestion$: BehaviorSubject<any> = new BehaviorSubject(null);

  post(question: any) {
    return this.http.post(
      `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions.json`,
      question
    );
  }
  getQuestion(questionId: string) {
    return this.http.get(
      `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions/${questionId}.json`
    );
  }
  patch(question: any, questionId: string) {
    return this.http.patch(
      `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions/${questionId}.json`,
      question
    );
  }

  delete(questionId: string) {
    return this.http.delete(
      `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions/${questionId}.json`
    );
  }
}
