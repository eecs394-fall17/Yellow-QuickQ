import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButton1Component } from './genericButton1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GenericButton1Component],
  exports: [GenericButton1Component]
})
export class GenericButton1Module { }
