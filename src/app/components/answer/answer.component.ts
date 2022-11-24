import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { IAnswer } from 'src/app/interfaces/answer.interface';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent {
  @Input() answer: IAnswer;
}
