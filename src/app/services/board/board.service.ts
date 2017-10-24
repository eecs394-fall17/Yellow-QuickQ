/**
 * Created by Encode_X on 17/10/2017.
 */
import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {StudentFeedPage} from "../../../pages/student-feed/student-feed";
import {InstructorFeedPage} from "../../../pages/instructor-feed/instructor-feed";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'

@Injectable()
export class BoardService {
  studentBoardIds:FirebaseListObservable<any[]>;
  instructorBoardIds:FirebaseListObservable<any[]>;
  studentBoardIds_arr: any = [];
  instructorBoardIds_arr: any = [];
  private allBoards:FirebaseListObservable<any[]>;
  private filteredStudentBoards: any;
  private filteredInstructorBoards: any;
  private userId:String;

  private notificationSource = new BehaviorSubject<any>(null);
  boards$ = this.notificationSource.asObservable();
  private boardSource = new BehaviorSubject<any>(null);
  currentBoard$ = this.boardSource.asObservable();

  constructor(private db: AngularFireDatabase){
  }

  private formatData(studentBoards, instructorBoards){
    let result:Array<{title: string, component: any, params: {}}> = [];
    let self = this;
    studentBoards.forEach(function (board: any) {
      if (board.$key)
      result.push({
        title: board.Title + "_STU",
        component: StudentFeedPage,
        params: {uid: self.userId, bid: board.$key}
      });
    });
    instructorBoards.forEach(function (board: any) {
      if (board.$key)
      result.push({
        title: board.Title + "_INS",
        component: InstructorFeedPage,
        params: {uid: self.userId, bid: board.$key}
      });
    });
    return result;
  }

  private setUserBoards() {
    this.studentBoardIds = this.db.list('/Students/' + this.userId);
    this.studentBoardIds.subscribe(students => {
      this.studentBoardIds_arr = students;
    });


    this.instructorBoardIds = this.db.list('/Instructors/' + this.userId);
    this.instructorBoardIds.subscribe(instructors => {
      this.instructorBoardIds_arr = instructors;
    });
  }

  public initialize(id){
    this.userId = id;
    this.setUserBoards();

    this.allBoards = this.db.list('/Boards');
    this.allBoards.subscribe(allBoards => {
      this.filteredStudentBoards = allBoards.filter(board => {
        return this.studentBoardIds_arr.filter(userBoard => {
          return userBoard.$value === board.$key;
        }).length != 0;
      });
      this.filteredInstructorBoards = allBoards.filter(board => {
        return this.instructorBoardIds_arr.filter(userBoard => {
          return userBoard.$value === board.$key;
        }).length != 0;
      });
      // console.log("initialized with this.filteredStudentBoards: ", this.filteredStudentBoards);
      // console.log("initialized with this.filteredInstructorBoards: ", this.filteredInstructorBoards);
      let formattedBoards = this.formatData(this.filteredStudentBoards, this.filteredInstructorBoards);
      // console.log("calling notification source with formattedBoards: ", formattedBoards);
      this.notificationSource.next(formattedBoards);
      this.boardSource.next('dashboard');
    });
  }

  public setCurrentPage(page){
    this.boardSource.next(page);
  }
}
