import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  constructor(private questionsService: QuestionsService) {}

  name: string = '';
  email: string = '';
  id: string = '';
  questions: object | null = {};

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user')!);
    this.name = user.displayName;
    this.email = user.email;
    this.id = user.uid;
    this.questionsService.getQuestions().subscribe((questions) => {
      if (questions) {
        this.questions = Object.fromEntries(
          Object.entries(questions).filter(
            (question) => question[1].authorId == this.id
          )
        );
      } else {
        this.questions = null;
      }
    });
  }
}
