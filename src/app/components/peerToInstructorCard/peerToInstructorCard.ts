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
	@Input() instructorSide: false; //Set to True if on instructorSide

	BID: string;
	QID: string;
	description: string;
	poster: string; //Anonymous will be checked on BE.
	time: any;
	title: any;
	upvotes: number;
	upvoted: boolean = false;
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
			this.QID=this.data.QID;
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
			this.upvoted = (localStorage.getItem(this.getLocalStorageKey())=="true");
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

	toggleUpvote(){
		this.upvoted = !this.upvoted;
		localStorage.setItem(this.getLocalStorageKey(), String(this.upvoted));
		this.upvotes += (this.upvoted? 1: -1)
		var str = '/Questions/' + this.data.$key;
		const question = this.database.object(str);
		question.update({Upvotes : this.upvotes });
		// Issue: AFter updating the database, the app will make a new call to it & re-create this card
		// Therefore the 'upvoted' feature is not shown. 
		// Right now, we can remedy that by using Local Storage as we don't yet have Authentication & User-ids to tie 
		// upvotes to. 
	}
	getLocalStorageKey(){
		return this.QID+"isUpvoted";
	}
}


