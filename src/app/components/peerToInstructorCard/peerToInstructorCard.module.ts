import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../services/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule.forRoot()],
  // declarations: [PeerToInstructorCardComponent],
  // exports: [PeerToInstructorCardComponent]
})
export class PeerToInstructorCardModule { }
