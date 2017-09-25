import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

/**
 * This class represents the lazy loaded SortPopOverComponent.
 */
@Component({
  selector: 'sd-sort-pop-over',
  templateUrl: 'sortPopOver.html',
})
export class SortPopOverComponent {
	sortMechanism: string;

	@Output() selection = new EventEmitter();

	public onSelection() {
	    this.selection.emit(this.sortMechanism);
	}

}
