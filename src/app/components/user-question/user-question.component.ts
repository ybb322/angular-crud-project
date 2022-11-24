import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrls: ['./user-question.component.scss'],
})
export class UserQuestionComponent implements OnInit {
  @Input() question!: any;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {}

  edit() {
    this.questionService.editedQuestion$.next(this.question);
  }

  delete(id: string) {
    this.questionService.delete(id).subscribe(() => {
      window.location.reload();
    });
  }
}
