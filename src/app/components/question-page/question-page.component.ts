import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
})
export class QuestionPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private authService: AuthService,
    private answerService: AnswerService
  ) {}
  id!: string;
  question!: any;
  answers!: object;
  answerAuthor: any = '';
  answerBody!: '';

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params) => params.getAll('id')))
      .subscribe((data) => {
        this.id = data;
      });
    this.route.data.subscribe((questions) => {
      this.question = questions['question'][this.id];
      this.answers = questions['question'][this.id].answers;
    });
    this.route.data.subscribe((user: any) => {
      this.answerAuthor = user.user.displayName;
    });
  }

  onSubmit() {
    this.answerService.submit(this.id, this.answerBody, this.answerAuthor);
  }
}
