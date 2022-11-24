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
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isSignUp = new BehaviorSubject<boolean>(false);
  constructor(
    public firestore: AngularFirestore,
    public fireauth: AngularFireAuth
  ) {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', 'null');
      }
    });
  }

  signUp(email: string, password: string, name: string): void {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.setUsername(name);
        alert('User created successfully!');
        this.logout();
      })
      .catch((error) => {
        alert("Couldn't create a user." + ' ' + error);
      });
  }

  setUsername(name: string): void {
    const auth = getAuth();
    updateProfile(auth.currentUser!, {
      displayName: name,
    });
  }

  login(email: string, password: string): void {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert('Login failed' + ' (' + error + ')');
      });
  }

  logout(): void {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.setItem('user', 'null');
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  }
}
