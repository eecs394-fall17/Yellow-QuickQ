import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { PeerToInstructorCardComponent } from '../../app/components/peerToInstructorCard/peerToInstructorCard';

@Component({
  selector: 'page-instructor-feed',
  templateUrl: 'instructor-feed.html'
})
export class InstructorFeedPage {
  questions: FirebaseListObservable<any[]>;
  board: FirebaseObjectObservable<any>;

  constructor(db: AngularFireDatabase) {                    // Inject database
    this.questions = db.list('/Questions');                 // The URL you want to fetch data from
    this.board = db.object('/Boards/bid-1234');
    console.log(this.questions);
    console.log(this.board);
  }
}
