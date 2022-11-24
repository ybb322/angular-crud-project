import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss'],
})
export class AskQuestionComponent implements OnInit, OnDestroy {
  questionForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
  });

  question: any = {
    title: '',
    description: '',
    author: '',
    answers: [],
    authorId: '',
  };
  questionId: null | string = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user')!);
    this.question.authorId = user.uid;
    this.question.author = user.displayName;
    this.questionService.editedQuestion$.subscribe((question) => {
      if (!question) {
        return;
      }
      this.questionForm.patchValue({
        title: question.value.title,
        description: question.value.description,
      });
      this.questionId = question.key;
    });
  }

  ngOnDestroy(): void {
    this.questionService.editedQuestion$.next(null);
  }

  onSubmit() {
    this.question.title = this.questionForm.value.title;
    this.question.description = this.questionForm.value.description;
    if (this.questionId) {
      this.questionService
        .patch(this.question, this.questionId)
        .subscribe(() => {
          this.router.navigate([`/question/${this.questionId}`]);
        });
    } else {
      this.questionService.post(this.question).subscribe((response: any) => {
        this.router.navigate([`/question/${response.name}`]);
      });
    }
  }
}
