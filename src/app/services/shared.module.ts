import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopOverSortCommService } from './popOverSortComm/popOverSortComm'

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule],
  providers: [PopOverSortCommService],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}