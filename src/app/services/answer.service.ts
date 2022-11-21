import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  constructor(private http: HttpClient) {}

  private url!: string;

  answerBody!: string;
  answerAuthor!: string;
  questionId!: string;

  answer = {
    body: '',
    author: '',
  };

  submit(questionId: string, answer: string, author: string) {
    this.questionId = questionId;
    this.answer.body = answer;
    this.answer.author = author;
    this.url = `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions/${this.questionId}/answers.json`;
    this.http.post(this.url, this.answer).subscribe((res) => {});
  }
}
