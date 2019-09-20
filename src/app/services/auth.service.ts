import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router,private firestore: AngularFirestore) 
  {
  	this.user = _firebaseAuth.authState;

  }

  goToiframewithinterests(email) {
    this.router.navigate(['/iframe_with_interests', {'email':email}]);
  }

  add_to_subscribers(email)
  {
     return this.firestore.collection('subscribers').add({'email': email})
  }

  add_interests(email, interests)
  {
    this.firestore.collection('users', ref => ref.where('email', '==', email)).get().subscribe((data)=> {
      data.forEach(el => {
        this.firestore.collection('users').doc(el.id).update({'interests': interests})
        this.goToiframewithinterests(email)
      })
    })
  }


  adduser(user)
  {
    return this.firestore.collection('users').add(user);
  }

  query_user_email(email)
  {
    return this.firestore.collection('users', ref => ref.where('email', '==', email))
  }


  create_user_with_email_password(email,password,firstname,lastname)
  {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email,password)
    // this._firebaseAuth.auth.createUserWithEmailAndPassword(email,password).then((data) => {
      //   console.log("from service",data)
      // }).catch((error) => {
        //   console.log("")
        // })
      }

      signInWithEmailPassword(email,password)
      {
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email,password)
      }

      

      signInWithFacebook() {
        return this._firebaseAuth.auth.signInWithPopup(
          new firebase.auth.FacebookAuthProvider()
          )
      }

      signInWithGoogle() {
        return this._firebaseAuth.auth.signInWithPopup(
          new firebase.auth.GoogleAuthProvider()
          )
      }
    }
