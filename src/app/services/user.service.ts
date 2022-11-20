import { Injectable } from '@angular/core';
import { updateProfile, User } from 'firebase/auth';
import { take } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private authService: AuthService) {}

  private name: string = '';
  private email: string = '';

  user: any = {
    name: '',
    email: '',
  };

  getUser(): void {
    this.authService.checkAuth();
    this.authService.currentUser$.pipe(take(1)).subscribe((value) => {
      this.user.name = value?.displayName;
      this.user.email = value?.email;
    });
  }

  get username() {
    return this.name;
  }

  get userEmail() {
    return this.email;
  }
}
