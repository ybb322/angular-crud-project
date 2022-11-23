import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Resolve, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService implements Resolve<any> {
  constructor(private http: HttpClient) {}
  questions$ = new Observable<Object>();
  questions: any;

  resolve() {
    // if (!this.questions) {
    //   this.getQuestions();
    //   return this.questions$;
    // } else return this.questions;
  }

  url: string =
    'https://helpdesk-31970-default-rtdb.europe-west1.firebasedatabase.app/questions.json';

  getQuestions() {
    return this.http.get(this.url);
  }
}
