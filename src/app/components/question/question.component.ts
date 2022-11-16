import { Component, OnInit, Input, Output } from '@angular/core';
import { IQuestion } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  constructor() {}

  @Input() question!: IQuestion;
  @Input() index!: number;

  ngOnInit(): void {}
}
