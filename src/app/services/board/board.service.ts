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
  private formattedBoards:Array<{title: string, component: any, params: {}}>;

  constructor(private db: AngularFireDatabase){}

  private formatData(boards){
    let result:Array<{title: string, component: any, params: {}}> = [];
    let self = this;
    boards.forEach(function (board: any) {
      result.push({
        title: board.Title + "_STU",
        component: StudentFeedPage,
        params: {uid: self.userId}
      });
      result.push({
        title: board.Title + "_INS",
        component: InstructorFeedPage,
        params: {uid: self.userId}
      });
    });
    return result;
  }

  public initialize(id, callback){
    this.userId = id;
    this.boards = this.db.list('/Boards');
    this.boards.subscribe(boards => {
      this.formattedBoards = this.formatData(boards);
      callback(this.formattedBoards);
    });
  }

  public getFormattedBoards(callback){
    if(this.formattedBoards){
      return this.formattedBoards;
    }
    else{
      let boards_call = this.db.list('/Boards');
      boards_call.subscribe(boards => {
        this.formattedBoards = this.formatData(boards);
        callback(this.formattedBoards);
      });
    }
  }
}