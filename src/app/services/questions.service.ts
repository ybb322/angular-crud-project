import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}
  questions$ = new Observable<Object>();
  questions = {};

  url: string =
    'https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions.json';

  getQuestions(): Observable<Object> {
    return this.http.get(this.url);
  }
}
