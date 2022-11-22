import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { QuestionsService } from './questions.service';
@Injectable({
  providedIn: 'root',
})
export class AskQuestionService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private questionsService: QuestionsService
  ) {}

  url: string =
    'https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions.json';
  submit(question: any) {
    this.http.post(this.url, question).subscribe((response: any) => {
      let questionId = response.name;
      console.log(questionId);
      this.questionsService.getQuestions();
      this.router.navigate([`/question/${questionId}`]);
    });
  }
}
