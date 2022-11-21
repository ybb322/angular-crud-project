import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AskQuestionService } from 'src/app/services/ask-question.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss'],
})
export class AskQuestionComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private askQuestionService: AskQuestionService
  ) {}

  questionForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
  });

  question: any = {
    title: '',
    description: '',
    author: '',
    answers: [],
  };

  ngOnInit(): void {
    this.route.data.subscribe((user: any) => {
      this.question.author = user.user.displayName;
    });
  }

  onSubmit() {
    this.question.title = this.questionForm.value.title;
    this.question.description = this.questionForm.value.description;
    this.askQuestionService.onSubmit(this.question);
  }
}
