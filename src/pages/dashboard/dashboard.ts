import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, MenuController, Nav, NavController, NavParams} from "ionic-angular";
import { AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import { BoardService} from "../../app/services/board/board.service";
import { Subscription } from 'rxjs/Subscription';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage implements OnInit, OnDestroy  {
	private courses:any;
	boards: Array<{title: string, component: any, params: {}}>;
	// studentBoards: Array<{title: string, component: any, params: {}}>;
	// instructorBoards: Array<{title: string, component: any, params: {}}>;
 	user: any;
 	boardSub: Subscription;

  	constructor(private menuCtrl: MenuController,private navParams: NavParams, public navCtrl: NavController, private boardService: BoardService) {
	  	this.user = navParams.get("user");
	  	console.log("dashboard constructor opened with this.user is = ", this.user);
  	}

  	ngOnInit():void{
    	this.boardSub = this.boardService.boards$.subscribe(
		  item => {
		  	console.log('the dashboard subscription received item: ', item);
		    if(item){
		    	console.log(item);
		      	this.boards=item;
		    }
		});
  	}

  	 ngOnDestroy():void{
	    this.boardSub.unsubscribe();
	  }

	openMenu(){
		this.menuCtrl.open();
	}

	openPage(p){
	    // navigate to the new page if it is not the current page
	    this.navCtrl.setRoot(p.component, {boardId: p.params.bid, title:p.params.Title});
	}
}