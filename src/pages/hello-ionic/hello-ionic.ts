import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  // when retrieving data from database, use angularfire2, easy and clear
  // when saving data, use `db.database` to get firebase database service
  boards: FirebaseListObservable<any[]>;
  board_as_object: FirebaseObjectObservable<any[]>;
  constructor(db: AngularFireDatabase) {                    // Inject database
    this.boards = db.list('/Boards');                       // The URL you want to fetch data from
    this.board_as_object = db.object('/Boards/bid-1234');   // When you have a specified id
  }
}
