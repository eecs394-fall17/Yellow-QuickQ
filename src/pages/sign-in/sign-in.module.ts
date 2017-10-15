import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SignInPage } from './sign-in';

@NgModule({
  declarations: [
    SignInPage,
  ],
  imports: [
    IonicModule.forRoot(SignInPage),
  ],
  entryComponents: [
    SignInPage
  ]
})
export class SignInPageModule {}
