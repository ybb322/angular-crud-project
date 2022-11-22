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
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements Resolve<any> {
  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    public fireauth: AngularFireAuth
  ) {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user));
        const localUser = JSON.parse(localStorage.getItem('user')!);
        localUser.displayName
          ? console.log(JSON.parse(localStorage.getItem('user')!))
          : window.location.reload();
      } else {
        console.log(JSON.parse(localStorage.getItem('user')!));
        localStorage.setItem('user', 'null');
      }
    });
  }

  userData: any;

  //
  // OLD
  // CODE
  // BELOW
  //

  currentUser$ = new Subject<User | null>();

  resolve() {
    // this.checkAuth();
    // return this.currentUser$;
  }

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
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  checkAuth() {
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     console.log(user);
    //     this.currentUser$.next(auth.currentUser);
    //     return user;
    //   }
    //   console.log('noone logged in');
    //   this.currentUser$.next(auth.currentUser);
    //   return null;
    // });
  }
}
