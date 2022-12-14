import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  private url: string;

  questionId: string;

  answer = {
    body: '',
    author: '',
    authorId: '',
  };

  constructor(private http: HttpClient) {}

  submit(
    questionId: string,
    answer: string,
    author: string,
    authorId: string
  ): void {
    this.questionId = questionId;
    this.answer.body = answer;
    this.answer.author = author;
    this.answer.authorId = authorId;
    this.url = `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions/${this.questionId}/answers.json`;
    this.http
      .post(this.url, this.answer)
      .subscribe(() => window.location.reload());
  }
}
