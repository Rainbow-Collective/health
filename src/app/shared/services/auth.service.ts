import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import { Observable } from 'rxjs';
import { User } from '@models/interfaces/user.interface';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly user$: Observable<User> = this.fireAuth.authState;

  constructor(
    public fireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
  ) { }

  // Firebase SignInWithPopup
  OAuthProvider(provider) {
    return this.fireAuth.signInWithPopup(provider)
      .then((res) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
      }).catch((error) => {
        window.alert(error);
      });
  }

    // Firebase Google Sign-in
    SignInWithFacebook() {
      return this.OAuthProvider(new auth.FacebookAuthProvider())
        .then(res => {
          console.log('Successfully logged in!');
        }).catch(error => {
          console.log(error);
        });
    }

  // Firebase Google Sign-in
  SignInWithGoogle() {
    return this.OAuthProvider(new auth.GoogleAuthProvider())
      .then(res => {
        console.log('Successfully logged in!');
      }).catch(error => {
        console.log(error);
      });
  }

  // Firebase Logout
  SignOut() {
    return this.fireAuth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

}
