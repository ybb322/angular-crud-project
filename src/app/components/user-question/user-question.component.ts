import { Component, Input } from '@angular/core';
import { IQuestion } from 'src/app/interfaces/question.interface';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrls: ['./user-question.component.scss'],
})
export class UserQuestionComponent {
  @Input() question: { key: string; value: IQuestion };

  constructor(private questionService: QuestionService) {}

  edit(): void {
    this.questionService.editedQuestion$.next(this.question);
  }

  delete(id: string): void {
    this.questionService.delete(id).subscribe(() => {
      window.location.reload();
    });
  }
}
