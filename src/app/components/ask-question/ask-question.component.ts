import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { IQuestion } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss'],
})
export class AskQuestionComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  questionForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.questionForm);
  }
}
