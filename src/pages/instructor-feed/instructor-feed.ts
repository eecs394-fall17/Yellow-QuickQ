import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { PeerToInstructorCardComponent } from '../../app/components/peerToInstructorCard/peerToInstructorCard';

@Component({
  selector: 'page-instructor-feed',
  templateUrl: 'instructor-feed.html'
})
export class InstructorFeedPage {
  questions: FirebaseListObservable<any[]>;
  question_as_object: FirebaseObjectObservable<any[]>;

  constructor(db: AngularFireDatabase) {                    // Inject database
    this.questions = db.list('/Questions');                       // The URL you want to fetch data from
    this.question_as_object = db.object('/Questions/qid-1234');   // When you have a specified id
    console.log(this.questions);
    console.log(this.question_as_object);
  }
}
