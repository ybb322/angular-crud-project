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

  currentUser$ = new Subject<User | null>();

  signUp(email: string, password: string, name: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.setUsername(name);
      })
      .catch((error) => {});
  }

  setUsername(name: string) {
    const auth = getAuth();
    updateProfile(auth.currentUser!, {
      displayName: name,
    });
  }

  login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.currentUser$.next(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  checkAuth() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
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
