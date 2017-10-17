import {Component, ViewChild} from '@angular/core';
import {AlertController, MenuController, Nav} from "ionic-angular";
import {InstructorFeedPage} from "../../../pages/instructor-feed/instructor-feed";
import {StudentFeedPage} from "../../../pages/student-feed/student-feed";
import {DashboardPage} from "../../../pages/dashboard/dashboard";
import {AngularFireAuth} from "angularfire2/auth";
import {SignInPage} from "../../../pages/sign-in/sign-in";

/**
 * This class represents the lazy loaded SideMenuComponent.
 */
@Component({
  selector: 'sd-side-menu',
  templateUrl: 'sideMenu.html',
})
export class SideMenuComponent {
  @ViewChild(Nav) navi: Nav;

  mainRootPage = DashboardPage;
  pages: Array<{title: string, component: any}>;

  constructor(private menuCtrl: MenuController, private afAuth: AngularFireAuth, private alertCtrl: AlertController) {
    // set our app's pages
    this.pages = [
      { title: 'Instructor Feed Page', component: InstructorFeedPage },
      { title: 'Student Feed Page', component: StudentFeedPage }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menuCtrl.close();
    // navigate to the new page if it is not the current page
    this.navi.setRoot(page.component);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.presentLogoutSuccessAlert();
    this.navi.parent.setRoot(SignInPage);
  }

  presentLogoutSuccessAlert() {
    const alert = this.alertCtrl.create({
      title: 'Logged Out',
      subTitle: 'You have successfully been logged out.',
      buttons: ['OK']
    });
    alert.present();
  }
}
