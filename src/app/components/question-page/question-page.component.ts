import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IQuestion } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
})
export class QuestionPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) {}
  id!: number;
  question!: IQuestion;

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params) => params.getAll('id')))
      .subscribe((data) => (this.id = +data));
    this.question = this.questionsService.getQuestion(this.id);
  }
}
