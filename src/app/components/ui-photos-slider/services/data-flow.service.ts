import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFlowService {
  public isSliderClosed$ = new Subject<boolean>();

  public provideIsSliderClosed(value: boolean): void {
    this.isSliderClosed$.next(value);
  }
}
