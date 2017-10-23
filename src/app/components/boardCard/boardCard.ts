import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * This class represents the lazy loaded PeerToInstructorCardComponent.
 */
@Component({
  selector: 'sd-board-card',
  templateUrl: 'boardCard.html'
})

export class BoardCardComponent implements OnInit{
	@Input() data: any;
	@Input() instructorSide: false; //Set to True if on instructorSide
	title:string;
	instructor:boolean;
	
  	database:AngularFireDatabase;

	constructor(db: AngularFireDatabase) {
		this.database = db;
	}

	ngOnInit(){
		this.extractData();
	}

	extractData(){
		if(this.data){
			let raw_title = this.data.title;
			console.log("this.raw_title is: ", raw_title);
			this.title = raw_title.substring(0,raw_title.length-4);
			this.instructor= raw_title.substring(raw_title.length-3)=='INS';
		}
	}
}