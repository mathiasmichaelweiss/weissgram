import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowAlertServiceService {
  public isModal$ = new Subject<boolean>();

  public getIsModal(value: boolean): void {
    this.isModal$.next(value);
  }
}
