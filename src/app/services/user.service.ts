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
  constructor() {}
}
