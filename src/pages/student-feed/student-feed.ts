import {Component, OnInit, OnDestroy} from '@angular/core';
import {MenuController, Modal, ModalController, PopoverController, NavParams} from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {SortPopOverComponent} from '../../app/components/sortPopOver/sortPopOver';
import {PopOverSortCommService} from '../../app/services/popOverSortComm/popOverSortComm';
import {Subscription} from 'rxjs/Subscription';
import * as _ from 'lodash';
import {P2iNewQuestionPage} from "../p2i-new-question/p2i-new-question";

@Component({
  selector: 'page-student-feed',
  templateUrl: 'student-feed.html'
})
export class StudentFeedPage implements OnInit, OnDestroy {
  questions: FirebaseListObservable<any[]>;
  // question_as_object: FirebaseObjectObservable<any[]>;
  board: FirebaseObjectObservable<any>;
  boardId: String;

  questions_as_array: any;
  sorted_questions_as_array: any;

  sortPopover: any;

  sortedBy: string = "TimeFIFO";
  subscription: Subscription;
  // @ViewChild(SortPopOverComponent) sortPopOverChild: SortPopOverComponent;

  constructor(public db: AngularFireDatabase, public navParams: NavParams, public popoverCtrl: PopoverController,
              private popOverSortCommService: PopOverSortCommService, public modalCtrl: ModalController,
              private menuCtrl: MenuController) {
                this.boardId = navParams.get("boardId");
                this.board = db.object('/Boards/' + this.boardId);
                this.questions = db.list('/Questions');
                this.questions.subscribe(questions => {
                this.questions_as_array = questions.filter(question => question.BID == this.boardId);
                this.sorted_questions_as_array = this.getSortedCards();
               });
  }

  ngOnInit(): void {
    this.subscription = this.popOverSortCommService.sortMech$.subscribe(
      item => {
        if (item) {
          this.sortedBy = item;
          this.sorted_questions_as_array = this.getSortedCards();
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  displaySortPopover(myEvent) {
    this.sortPopover = this.popoverCtrl.create(SortPopOverComponent, {
      sortMechanism: this.sortedBy,
    });
    this.sortPopover.onDidDismiss((data: { pop: boolean }) => {
      console.log("ON DID DISMISS, ", data)
      this.sortPopover = null;
    });
    this.sortPopover.onWillDismiss((data: any) => {
      console.log("ON WILL DISMISS, ", data)
      this.sortPopover = null;
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

  getSortedCards() {
    let sortMech = this.sortedBy;
    return this.sortCards(this.questions_as_array, sortMech);
  }

  sortCards(cards, sortMech) {
    let sorted = null;
    switch (sortMech) {
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
        let [resolved, unresolved] = _.partition(cards, function (q) {
          return q.isResolved
        });
        sorted = _.concat(this.sortCards(unresolved, 'TimeFIFO'), this.sortCards(resolved, 'TimeFIFO'));
        console.log("sorted is: ", sorted);
        return sorted;
    }
  }

  createNewQuestion(event) {
    const newQuestionModal:Modal = this.modalCtrl.create(P2iNewQuestionPage, {boardId: this.boardId});
    newQuestionModal.present();
  }

  resetDatabase() {
    _.map(this.questions_as_array, q => {
      var str = '/Questions/' + q.$key;
      const _question = this.db.object(str);
      _question.update({isResolved: false});
    })
  }

  openMenu(){
    this.menuCtrl.open();
  }

}


