import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { PeerToInstructorCardComponent } from '../../app/components/peerToInstructorCard/peerToInstructorCard';
import { SortPopOverComponent } from '../../app/components/sortPopOver/sortPopOver';

@Component({
  selector: 'page-instructor-feed',
  templateUrl: 'instructor-feed.html'
})
export class InstructorFeedPage {
  questions: FirebaseListObservable<any[]>;
  question_as_object: FirebaseObjectObservable<any[]>;
  sortedBy:string;

  @ViewChild(SortPopOverComponent) sortPopOverChild: SortPopOverComponent;

  constructor(db: AngularFireDatabase, public popoverCtrl: PopoverController) {                    // Inject database
    this.questions = db.list('/Questions');                       // The URL you want to fetch data from    
  }

  displaySortPopover() {
    let sortPopover = this.popoverCtrl.create(SortPopOverComponent, {
      sortMechanism: this.sortedBy
    });
    sortPopover.present();
  }
}