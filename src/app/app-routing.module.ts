import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPageComponent } from './components/question-page/question-page.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AuthService } from './services/auth.service';
import { NavComponent } from './components/nav/nav.component';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { QuestionsService } from './services/questions.service';
import { QuestionService } from './services/question.service';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
    resolve: {
      questions: QuestionsService,
    },
  },
  {
    path: 'question/:id',
    component: QuestionPageComponent,
    resolve: {
      question: QuestionService,
    },
  },
  {
    path: 'ask-question',
    component: AskQuestionComponent,
    resolve: {
      user: AuthService,
    },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'user-page',
    component: UserPageComponent,
    resolve: {
      user: AuthService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
