import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded PeerToInstructorCardComponent.
 */
@Component({
  selector: 'sd-peer-to-instructor-card',
  templateUrl: 'peerToInstructorCard.component.html',
  styleUrls: ['peerToInstructorCard.component.css']
})
export class PeerToInstructorCardComponent {
	title: string;
	description: string;
	author: string; //Anonymous will be checked on BE.
	time: any;
	upvotes: any;
	solved: boolean;
}
