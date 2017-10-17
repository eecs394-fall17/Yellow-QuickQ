import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DashboardPage } from "./dashboard";

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicModule.forRoot(DashboardPage)
  ],
  entryComponents: [
    DashboardPage
  ]
})
export class DashboardPageModule {}
