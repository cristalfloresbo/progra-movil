import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { resolve } from 'url';

@Injectable()
export class AuthenticateService {

  constructor() { }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => this.updateUser(value),
          err => reject(err))
    })
  }

  updateUser(value) {
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: value.name + " " + value.lastName
    }).then(() => {
      console.log(user);
    }).catch(function (error) {
      console.log(error);
    });
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return firebase.auth().currentUser;
  }
}
