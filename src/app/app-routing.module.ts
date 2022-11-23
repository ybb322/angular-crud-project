import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPageComponent } from './components/question-page/question-page.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { IsNotAuthGuard } from './guards/isNotAuth.guard';
import { IsAuthGuard } from './guards/isAuth.guard';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
  },
  {
    path: 'question/:id',
    component: QuestionPageComponent,
  },
  {
    path: 'ask-question',
    component: AskQuestionComponent,
    canActivate: [IsAuthGuard],
  },
  {
    path: 'edit-question',
    component: AskQuestionComponent,
    canActivate: [IsAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotAuthGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [IsNotAuthGuard],
  },
  {
    path: 'user-page',
    component: UserPageComponent,
    canActivate: [IsAuthGuard],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
