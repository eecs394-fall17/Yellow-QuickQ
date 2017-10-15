import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { InstructorFeedPage } from '../pages/instructor-feed/instructor-feed';
import { StudentFeedPage } from '../pages/student-feed/student-feed';
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
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Instructor Feed Page', component: InstructorFeedPage },
      { title: 'Student Feed Page', component: StudentFeedPage },
      { title: 'Sign In Page', component: SignInPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  changePage(event){
    console.log("changePage has been called in the component. Event is: ", event)
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
