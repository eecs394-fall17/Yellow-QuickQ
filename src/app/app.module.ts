import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// Maybe not using it now
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { InstructorFeedPage } from '../pages/instructor-feed/instructor-feed';
import { PeerToInstructorCardComponent } from './components/peerToInstructorCard/peerToInstructorCard';
import { PeerToInstructorCardModule } from './components/peerToInstructorCard/peerToInstructorCard.module';
import { SortPopOverComponent } from './components/sortPopOver/sortPopOver';

import { PopOverSortCommService } from './services/popOverSortComm/popOverSortComm'

import { SharedModule } from './services/shared.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InstructorFeedPage,
    SortPopOverComponent,
    PeerToInstructorCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase, 'quick-q'),
    AngularFireDatabaseModule,
    SharedModule.forRoot(),
    PeerToInstructorCardModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InstructorFeedPage,
    SortPopOverComponent,
    PeerToInstructorCardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PopOverSortCommService
  ]
})
export class AppModule {}
