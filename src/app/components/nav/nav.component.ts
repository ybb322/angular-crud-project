import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  isAuth: boolean = false;

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('user')!));
    this.isAuth = JSON.parse(localStorage.getItem('user')!) ? true : false;
    console.log(this.isAuth);
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
