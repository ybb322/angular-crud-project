import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from 'firebase.config';
import { initializeApp } from 'firebase/app';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    initializeApp(firebaseConfig);
    this.userService.getUser();
  }
}
