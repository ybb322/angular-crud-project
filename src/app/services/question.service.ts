import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService implements Resolve<any> {
  constructor(
    private questionsService: QuestionsService,
    private questionService: QuestionsService,
    private http: HttpClient
  ) {}

  resolve() {
    // this.getQuestion(this.questionId);
    // return this.getQuestion(this.questionId);
  }

  getQuestion(questionId: string) {
    return this.http.get(
      `https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions/${questionId}.json`
    );
  }
}
