import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  constructor(private http: HttpClient, private router: Router) {}

  private url!: string;

  questionId!: string;

  answer = {
    body: '',
    author: '',
    authorId: '',
  };

  submit(questionId: string, answer: string, author: string, authorId: string) {
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
