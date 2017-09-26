import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { PeerToInstructorCardComponent } from '../../app/components/peerToInstructorCard/peerToInstructorCard';
import { SortPopOverComponent } from '../../app/components/sortPopOver/sortPopOver';
import { PopOverSortCommService } from '../../app/services/popOverSortComm/popOverSortComm';
import { Subscription } from 'rxjs/Subscription';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'page-instructor-feed',
  templateUrl: 'instructor-feed.html'
})
export class InstructorFeedPage implements OnInit, OnDestroy {
  questions: FirebaseListObservable<any[]>;
  question_as_object: FirebaseObjectObservable<any[]>;
  questions_as_array: any;
  sorted_questions_as_array: any;

  sortPopover: any;

  sortedBy:string = "TimeFIFO";
  subscription: Subscription;
  // @ViewChild(SortPopOverComponent) sortPopOverChild: SortPopOverComponent;

  constructor(db: AngularFireDatabase, public popoverCtrl: PopoverController, private popOverSortCommService: PopOverSortCommService, private navCtrl:NavController) {                    // Inject database
    this.questions = db.list('/Questions');                       // The URL you want to fetch data from    
    this.questions.subscribe(questions => {
      this.questions_as_array = questions;
      this.sorted_questions_as_array = this.getSortedCards();
    })
  }

  ngOnInit():void{
    this.subscription = this.popOverSortCommService.sortMech$.subscribe(
      item => {
        if(item){
          this.sortedBy=item;
          this.sorted_questions_as_array = this.getSortedCards();
        }
      });
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  displaySortPopover(myEvent) {
    this.sortPopover = this.popoverCtrl.create(SortPopOverComponent, {
      sortMechanism: this.sortedBy,
    });
    this.sortPopover.onDidDismiss((data:{pop:boolean}) => {
      console.log("ON DID DISMISS, ", data)
      this.sortPopover=null;
    });
    this.sortPopover.onWillDismiss((data:any) => {
      console.log("ON WILL DISMISS, ", data)
      this.sortPopover=null;
    })
    this.sortPopover.present({ev: myEvent, sortMechanism: this.sortedBy})
    // .then(() => {
    //   this.popOverSortCommService.sortMech$.subscribe(
    //     response => {
    //       if(response){
    //         this.sortedBy=response;
    //         this.sorted_questions_as_array = this.getSortedCards();
    //         this.sortPopover.dismissAll();
    //       }
    //     }, error => {
    //       this.sortPopover.dismissAll();
    //     });
    // });
  }

  getSortedCards(){
    let sortMech = this.sortedBy;
    return this.sortCards(this.questions_as_array, sortMech);
  }

  sortCards(cards, sortMech){
    let sorted = null;
    switch(sortMech){
      case('Upvotes'):
        sorted = _.sortBy(cards, "Upvotes").reverse();
        return sorted;
      case('TimeFIFO'):
        sorted = _.sortBy(cards, "Timestamp");
        return sorted;
      case('TimeLIFO'):
        sorted = _.sortBy(cards, "Timestamp").reverse();
        return sorted;
      case('Resolved'):
        let [resolved, unresolved] = _.partition(cards, function(q){
          return q.isResolved
        });
        sorted = _.concat(this.sortCards(unresolved, 'TimeFIFO'), this.sortCards(resolved, 'TimeFIFO'));
        console.log("sorted is: ", sorted);
        return sorted;
    }
  }
}


