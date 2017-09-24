import { Component, Input, OnInit } from '@angular/core';

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

	solved:boolean = false;
	collapsed:boolean;

	ngOnInit(){
		console.log("data is: ", this.data);
		this.extractData();
	}

	extractData(){
		if(this.data){
			this.BID= this.data.BID
			this.description = this.data.Description
			this.poster = this.data.Poster
			this.time = this.data.Timestamp
			this.title = this.data.Title
			this.upvotes = this.data.Upvotes
		}
	}

	toggleCollapse(){
		console.log("toggleCollapse called");
		this.collapsed=!this.collapsed;
	}
}
