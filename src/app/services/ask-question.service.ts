import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AskQuestionService {
  constructor(private http: HttpClient) {}

  url: string =
    'https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions.json';

  onSubmit(question: any) {
    console.log(question);
    this.http
      .post(this.url, question)
      .subscribe((response) => console.log(response));
  }
}
