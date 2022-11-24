import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';
import { IQuestion } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
})
export class QuestionPageComponent implements OnInit {
  id: string;
  question: null | IQuestion;
  answers: {} | undefined;
  answerAuthor: string;
  answerAuthorId: string;
  answerBody: string;
  isAuth: boolean;

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params) => params.getAll('id')))
      .subscribe((data) => {
        this.id = data;
        this.questionService
          .getQuestion(this.id)
          .subscribe((question: IQuestion) => {
            this.question = question;
            this.answers = question.answers;
          });
      });
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      this.answerAuthor = user.displayName;
      this.answerAuthorId = user.uid;
      this.isAuth = true;
    } else {
      this.answerAuthor = '';
      this.isAuth = false;
    }
  }

  onSubmit(): void {
    this.answerService.submit(
      this.id,
      this.answerBody,
      this.answerAuthor,
      this.answerAuthorId
    );
  }
}
