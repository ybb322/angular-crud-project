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

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { UserQuestionComponent } from './components/user-question/user-question.component';
import { NavButtonComponent } from './visuals/nav-button/nav-button.component';
import { ActionButtonComponent } from './visuals/action-button/action-button.component';
import { DeleteButtonComponent } from './visuals/delete-button/delete-button.component';
import { LinkComponent } from './visuals/link/link.component';

@NgModule({
  declarations: [
    UserQuestionComponent,
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
    NavButtonComponent,
    ActionButtonComponent,
    DeleteButtonComponent,
    LinkComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
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
