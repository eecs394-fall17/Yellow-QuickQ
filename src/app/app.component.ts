import { Component, ViewChild } from '@angular/core';

import { Platform, Nav } from 'ionic-angular';

import { SignInPage } from '../pages/sign-in/sign-in';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make SignInPage the root (or first) page
  rootPage = SignInPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      // this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
    });
  }

  changePage(event){
    console.log("changePage has been called in the component. Event is: ", event)
  }
}
