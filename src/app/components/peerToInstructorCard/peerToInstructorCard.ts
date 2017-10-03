import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * This class represents the lazy loaded PeerToInstructorCardComponent.
 */
@Component({
  selector: 'sd-peer-to-instructor-card',
  templateUrl: 'peerToInstructorCard.html'
})
export class PeerToInstructorCardComponent implements OnInit{
	@Input() data: any;
	BID: string;
	description: string;
	poster: string; //Anonymous will be checked on BE.
	time: any;
	title: any;
	upvotes: boolean;
	resolved:boolean = false;
	collapsed:boolean = true;
  	database:AngularFireDatabase;

	constructor(db: AngularFireDatabase) {
		this.database = db;
	}

	ngOnInit(){
		this.extractData();
	}

	extractData(){
		if(this.data){
			this.BID= this.data.BID
			this.description = this.data.Description
			if(!this.data.isAnon) {
				this.poster = this.data.Poster
			} else {
				this.poster = "Anonymous"
			}
			this.time = this.data.Timestamp
			this.title = this.data.Title
			this.upvotes = this.data.Upvotes
			this.resolved = this.data.isResolved;
		}
	}

	toggleCollapse(){
		this.collapsed=!this.collapsed;
	}

	makeResolved(){
		this.resolved=true;
		this.toggleCollapse();
		setTimeout(
			function(){ 
				var str = '/Questions/' + this.data.$key;
				const question = this.database.object(str);
				question.update({isResolved : true});
		}.bind(this), 400);
	}

	makeUnresolved(){
		this.resolved=false;
		var str = '/Questions/' + this.data.$key;
		const question = this.database.object(str);
		question.update({isResolved : false});
	}
}
