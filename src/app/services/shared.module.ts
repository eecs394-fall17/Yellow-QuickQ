import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopOverSortCommService } from './popOverSortComm/popOverSortComm'
import { BoardService } from './board/board.service'

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule],
  providers: [PopOverSortCommService, BoardService],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}