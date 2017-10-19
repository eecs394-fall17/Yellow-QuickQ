/**
 * Created by Encode_X on 17/10/2017.
 */
import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {StudentFeedPage} from "../../../pages/student-feed/student-feed";
import {InstructorFeedPage} from "../../../pages/instructor-feed/instructor-feed";

@Injectable()
export class BoardService {
  private boards:FirebaseListObservable<any[]>;
  private userId:String;

  constructor(private db: AngularFireDatabase){}

  private formatData(boards){
    let result:Array<{title: string, component: any, params: {}}> = [];
    let self = this;
    boards.forEach(function (board: any) {
      result.push({
        title: board.Title + "_STU",
        component: StudentFeedPage,
        params: {uid: self.userId, bid: board.$key}
      });
      result.push({
        title: board.Title + "_INS",
        component: InstructorFeedPage,
        params: {uid: self.userId, bid: board.$key}
      });
    });
    return result;
  }

  public initialize(id, callback){
    this.userId = id;

    this.boards = this.db.list('/Boards');
    this.boards.subscribe(boards => {
      callback(this.formatData(boards));
    });
  }
}
