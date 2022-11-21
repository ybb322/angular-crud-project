import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService implements Resolve<any> {
  constructor(private questionsService: QuestionsService) {}
  resolve() {
    this.questionsService.getQuestions();
    return this.questionsService.questions$;
  }
}
