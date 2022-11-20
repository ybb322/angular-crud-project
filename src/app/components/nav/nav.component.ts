import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isAuth: boolean = false;

  ngOnInit(): void {
    this.authService.checkAuth();
    this.authService.isAuth$.subscribe((value) => {
      this.isAuth = value;
    });
  }

  logout() {
    this.authService.logout();
  }
}
