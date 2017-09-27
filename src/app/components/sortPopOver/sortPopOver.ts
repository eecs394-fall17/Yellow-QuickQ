import { Component} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { PopOverSortCommService } from '../../services/popOverSortComm/popOverSortComm';

/**
 * This class represents the lazy loaded SortPopOverComponent.
 */
@Component({
  selector: 'sd-sort-pop-over',
  templateUrl: 'sortPopOver.html'
})
export class SortPopOverComponent {
	public sortMechanism: string;
	public afterInitialSelection: boolean = false;
	constructor(public popOverSortCommService:PopOverSortCommService, public viewCtrl:ViewController,public navParams:NavParams){
		this.sortMechanism = this.navParams.data.sortMechanism;
	}

	public onSelection(ev) {
		if(!this.afterInitialSelection){
			this.afterInitialSelection=true;
			return;
		}
		if(ev){
			this.popOverSortCommService.setMechanism(this.sortMechanism);
			this.viewCtrl.dismiss({pop:true}).catch(() => {});
		}
	}

}
