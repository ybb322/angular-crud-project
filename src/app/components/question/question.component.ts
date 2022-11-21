import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  constructor() {}

  @Input() question!: any;
  @Input() index!: number;

  ngOnInit(): void {}
}
