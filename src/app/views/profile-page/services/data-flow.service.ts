import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFlowService {
  public userTextValue$ = new Subject<string>();
  public isCanChangeUserInfo$ = new Subject<boolean>();

  public provideUserTextValue(value: string): void {
    this.userTextValue$.next(value);
  }

  public provideIsCanChangeUserInfo(value: boolean): void {
    this.isCanChangeUserInfo$.next(value);
  }
}
