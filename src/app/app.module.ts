import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionPageComponent } from './components/question-page/question-page.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    QuestionsComponent,
    QuestionComponent,
    QuestionPageComponent,
    AskQuestionComponent,
    AnswerComponent,
    LoginComponent,
    SignUpComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
