import { Component } from '@angular/core';
import {IonicPage, MenuController} from "ionic-angular";

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(private menuCtrl: MenuController) {}

  openMenu(){
    this.menuCtrl.open();
  }
}
