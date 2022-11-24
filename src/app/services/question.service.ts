import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  editedQuestion$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  post(question: {}): Observable<any> {
    return this.http.post(
      `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions.json`,
      question
    );
  }
  getQuestion(questionId: string): Observable<any> {
    return this.http.get(
      `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions/${questionId}.json`
    );
  }
  patch(question: {}, questionId: string): Observable<any> {
    return this.http.patch(
      `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions/${questionId}.json`,
      question
    );
  }

  delete(questionId: string): Observable<any> {
    return this.http.delete(
      `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions/${questionId}.json`
    );
  }
}
