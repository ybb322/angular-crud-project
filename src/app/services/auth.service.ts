import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile,
} from 'firebase/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements Resolve<any> {
  constructor(private router: Router) {}
  resolve() {
    this.checkAuth();
    return this.currentUser$;
  }

  isAuth: boolean = false;
  isAuth$ = new Subject<boolean>();
  currentUser$ = new Subject<User | null>();

  signUp(email: string, password: string, name: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.setUsername(name);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  }

  setUsername(name: string) {
    const auth = getAuth();
    updateProfile(auth.currentUser!, {
      displayName: name,
    })
      .then(() => {
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.isAuth$.next(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  checkAuth() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isAuth = true;
        this.isAuth$.next(true);
        console.log(user);
        this.currentUser$.next(auth.currentUser);
        return user;
      }
      console.log('noone logged in');
      this.currentUser$.next(auth.currentUser);
      return null;
    });
  }
}
