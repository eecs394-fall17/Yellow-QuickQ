import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the PopOverSortComm service
 */

@Injectable()
export class PopOverSortCommService {

  public sortOption: string;
  private notificationSource = new BehaviorSubject<string>(null);
  sortMech$ = this.notificationSource.asObservable();

  public setMechanism(input_mech: string) {
    this.sortOption = input_mech;
    this.notificationSource.next(input_mech);
  }

  public getMechanism():string{
    return this.sortOption;
  }
}

