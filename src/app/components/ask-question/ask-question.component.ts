import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss'],
})
export class AskQuestionComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService
  ) {}

  url: string =
    'https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions.json';

  questionForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
  });

  question: any = {
    title: '',
    description: '',
    author: '',
  };

  ngOnInit(): void {
    console.log('NG ON INIT!!!');
  }

  onSubmit() {
    this.question.title = this.questionForm.value.title;
    this.question.description = this.questionForm.value.description;
    this.question.author = this.userService.user.name;
    console.log(this.question);
    this.http
      .post(this.url, this.question)
      .subscribe((response) => console.log(response));
  }
}
