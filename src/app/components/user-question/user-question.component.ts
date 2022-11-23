import { Component, Input, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrls: ['./user-question.component.scss'],
})
export class UserQuestionComponent implements OnInit {
  constructor() {}

  @Input() question!: any;

  ngOnInit(): void {}
}
