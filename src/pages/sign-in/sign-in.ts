import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  email: string = "";
  password: string = "";
  students: FirebaseListObservable<any[]>;
  instructors: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.students = db.list('/Students');
    this.instructors = db.list('/Instructors');
    this.afAuth.auth.onAuthStateChanged( user => {
      if (user) {
        // User is signed in... some data that we have now:
        var displayName = user.displayName;
        var email = user.email;
        var uid = user.uid;
        console.log('name: ' + displayName);
        console.log('email: ' + email);
        console.log('uid: ' + uid);
        // get boardIDs
        this.students.subscribe(students => {
          console.log(students);
        });

        //set page
        //this.navCtrl.setRoot(StudentFeedPage);
      } else {
        // user is signed out
        //this.navCtrl.setRoot(SignInPage);
      }
    });
  }

  /*
  //not using this yet
  signup() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
      //var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  */

  login() {
    console.log('email:' + this.email);
    console.log('pass: ' + this.password);
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).catch(error => {
      var errorMessage = error.message;
      //TODO: dialog box on login failure here
      this.presentLoginFailureAlert();
      console.log('error with login!!' + errorMessage);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.presentLogoutSuccessAlert();
  }

  presentLoginFailureAlert() {
    const alert = this.alertCtrl.create({
      title: 'Failed to login',
      subTitle: 'Email or password is incorrect. Please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  presentLogoutSuccessAlert() {
    const alert = this.alertCtrl.create({
      title: 'Logged Out',
      subTitle: 'You have successfully been logged out.',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

}
