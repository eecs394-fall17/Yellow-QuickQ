import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SideMenuComponent } from "./sideMenu";

@NgModule({
  declarations: [
    SideMenuComponent,
  ],
  imports: [
    IonicModule.forRoot(SideMenuComponent)
  ],
  entryComponents: [
    SideMenuComponent
  ]
})
export class SideMenuCompModule {}
