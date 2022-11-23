import { Injectable } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public firestore: AngularFirestore,
    public fireauth: AngularFireAuth
  ) {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        const localUser = JSON.parse(localStorage.getItem('user')!);
        if (!localUser.displayName) {
          window.location.reload();
        }
      } else {
        localStorage.setItem('user', 'null');
      }
    });
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
}
