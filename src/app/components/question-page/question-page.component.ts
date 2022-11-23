import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';

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
    private answerService: AnswerService,
    private questionService: QuestionService
  ) {}
  id!: string;
  question: null | any;
  answers!: object;
  answerAuthor: any = '';
  answerAuthorId!: string;
  answerBody!: '';
  isAuth!: boolean;

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params) => params.getAll('id')))
      .subscribe((data) => {
        this.id = data;
        this.questionService.getQuestion(this.id).subscribe((question: any) => {
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

  onSubmit() {
    this.answerService.submit(
      this.id,
      this.answerBody,
      this.answerAuthor,
      this.answerAuthorId
    );
  }
}
