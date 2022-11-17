import { Injectable } from '@angular/core';
import { IQuestion } from '../interfaces/question.interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor() {}

  //TODO: This is a test value. Replace with real values later.
  questions: IQuestion[] = [
    {
      id: 1,
      title: "overflow:hidden doesn't work as expected",
      description:
        "I was working on a slider of images and decided to use overflow:hidden to hide inactive slides. But it doesn't work as expected.",
      tags: [],
      author: 'JohnDoe2022',
      //TODO fix the type
      date: '15 minutes ago',
      //TODO fix the type
      answers: [
        {
          body: 'This is my answer to your question. This is my answer to your question. This is my answer to your question. This is my answer to your question. ',
          author: 'Answerer1',
          date: '15 minutes ago',
        },
      ],
    },
    {
      id: 2,
      title: "Can anyone explain how 'position: absolute' works?",
      description:
        "I was going through the w3schools documentation a couple of times, but I still can't wrap my head around it. Please explain it as simple as you can.",
      tags: [],
      author: 'PaulSmith_01',
      //TODO fix the type
      date: 'yesterday',
      //TODO fix the type
      answers: [],
    },
    {
      id: 3,
      title: 'fatal: not a git repository',
      description:
        "I caught this error while setting up my project locally. I've created a folder and remote repository, followed the instructions, but for some reason caught this error.",
      tags: [],
      author: 'JakeWatson_99',
      //TODO fix the type
      date: '2 hours ago',
      //TODO fix the type
      answers: [],
    },
  ];

  get getQuestions() {
    return this.questions;
  }

  getQuestion(id: number) {
    return this.questions.filter((x) => x.id == id)[0];
  }
}
