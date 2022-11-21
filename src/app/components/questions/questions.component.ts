import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute
  ) {}

  questions!: object;

  ngOnInit(): void {
    this.route.data.subscribe((questions: any) => {
      this.questions = questions.questions;
    });
  }
}
