import {Component} from '@angular/core';
import {IonicPage, ViewController} from "ionic-angular";
import {AngularFireDatabase} from "angularfire2/database";

/**
 * This class represents the lazy loaded P2iNewQuestionPage.
 */

@IonicPage()
@Component({
  selector: 'page-p2i-new-question',
  templateUrl: 'p2i-new-question.html',
})
export class P2iNewQuestionPage {
  questionTitle: string;
  questionDescription: string;
  isAnonymous: boolean;

  constructor(private view: ViewController, private db:AngularFireDatabase) {

  }

  closeModal() {
    this.view.dismiss();
  }

  postQuestion(){
    const questions = this.db.list('/Questions');
    questions.push(
      {
        "Poster": "Jianyou Fang",
        "BID": "bid-1234",
        "Description": this.questionDescription,
        "Timestamp": Date.now(),
        "Title": this.questionTitle,
        "Upvotes": 0,
        "isAnonymous": this.isAnonymous,
        "isResolved": false
      }
    );
    this.closeModal();
  }
}
