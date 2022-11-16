import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { IQuestion } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  constructor(private questionsService: QuestionsService) {}

  questions: IQuestion[] = [];

  ngOnInit(): void {
    this.questions = this.questionsService.getQuestions;
  }
}
