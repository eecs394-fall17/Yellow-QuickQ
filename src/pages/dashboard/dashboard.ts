import { Component, ViewChild } from '@angular/core';
import { IonicPage, MenuController, Nav, NavController, NavParams} from "ionic-angular";
import { AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import { BoardService} from "../../app/services/board/board.service";

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers:[BoardService]
})
export class DashboardPage {
	private courses:any;
	pages: Array<{title: string, component: any, params: {}}>;
 	user: any;

  	constructor(private menuCtrl: MenuController,private navParams: NavParams, public navCtrl: NavController, private boardService: BoardService) {
	  	this.user = navParams.get("user");
	  	console.log("dashboard constructor opened with this.user is = ", this.user);
	  	this.boardService.getFormattedBoards(boards => {
	  		this.pages=boards;
	  		console.log("this.pages in dashboard is: ", this.pages);
	  	})
		console.log("called this.pages from dashboard: ", this.pages)
  }

	openMenu(){
		this.menuCtrl.open();
	}

	openPage(p){
	    // navigate to the new page if it is not the current page
	    console.log("openPage p, where p is: ", p);
	    this.navCtrl.setRoot(p.component, {"page":p});
	}
}