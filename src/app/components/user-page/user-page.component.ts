import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'firebase/auth';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Input, Output } from '@angular/core';
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
    console.log(user);
    console.log(this.questions);
    this.name = user.displayName;
    this.email = user.email;
    this.id = user.uid;
    this.questionsService.getQuestions().subscribe((questions) => {
      if (questions) {
        console.log(questions);
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
