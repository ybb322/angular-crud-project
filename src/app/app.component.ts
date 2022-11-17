import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from 'firebase.config';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
}
