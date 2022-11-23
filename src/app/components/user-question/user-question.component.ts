import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrls: ['./user-question.component.scss'],
})
export class UserQuestionComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  @Input() question!: any;

  ngOnInit(): void {
    console.log(this.question);
  }

  delete(id: string) {
    this.questionService.deleteQuestion(id).subscribe(() => {
      window.location.reload();
    });
  }
}
