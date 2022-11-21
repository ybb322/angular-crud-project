import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'firebase/auth';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  name: string = '';
  email: string = '';

  ngOnInit(): void {
    this.route.data.subscribe((user: any) => {
      console.log(user);
      this.name = user.user.displayName;
      this.email = user.user.email;
    });
  }
}
