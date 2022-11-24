import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isAuth: boolean = false;

  ngOnInit(): void {
    this.isAuth = JSON.parse(localStorage.getItem('user')!) ? true : false;
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}
