import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { HttpService } from './services/http.service';
import { ShowAlertServiceService } from 'src/app/components/alert/show-alert-service.service';

enum AuthStatus {
  SUCCES = 'SUCCES',
  ALREADY_REGISTERED = 'ALREADY_REGISTERED',
  DISCONNECTED = 'DISCONNECTED'
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('authMenu', { read: ElementRef })
  authMenu?: ElementRef;
  signInData!: any;
  authStatus: string = '';
  modal: boolean = false;
  alert: { title: string; icon: string; text: string } = {
    title: '',
    icon: '',
    text: ''
  };
  alertMessages: {
    success: { title: string; text: string; icon: string };
    alreadyReg: { title: string; text: string; icon: string };
    disconnected: { title: string; text: string; icon: string };
  } = {
    success: {
      title: 'You have successfully registered.',
      text: '',
      icon: 'bi bi-check-circle-fill'
    },
    alreadyReg: {
      title: 'This user is already registered.',
      text: '',
      icon: 'bi bi-exclamation-triangle-fill'
    },
    disconnected: {
      title: 'Oops, something went wrong.',
      text: 'Please try again later.',
      icon: 'bi bi-exclamation-circle-fill'
    }
  };

  private showAlertSubscription$: any;

  constructor(
    private readonly HttpService: HttpService,
    private readonly showAlertService: ShowAlertServiceService
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.showAlertSubscription$ = this.showAlertService.isModal$.subscribe(
      value => {
        if (value === false) this.modal = value;
      }
    );
  }

  ngOnDestroy(): void {
    this.showAlertSubscription$.unsubscribe();
  }

  public register(form: any) {
    this.HttpService.authUser('user/register', form).subscribe(
      data => {
        this.signInData = data;
        const status = this.signInData.status;
        if (status === 'success') {
          this.authStatus = AuthStatus.SUCCES;
          this.alert.title = this.alertMessages.success.title;
          this.alert.text = this.alertMessages.success.text;
          this.alert.icon = this.alertMessages.success.icon;
          this.modal = true;
        }
        if (status === 'already registered') {
          this.authStatus = AuthStatus.ALREADY_REGISTERED;
          this.alert.title = this.alertMessages.alreadyReg.title;
          this.alert.text = this.alertMessages.alreadyReg.text;
          this.alert.icon = this.alertMessages.alreadyReg.icon;
          this.modal = true;
        }
      },
      error => {
        if (error.status === 0) {
          this.authStatus = AuthStatus.DISCONNECTED;
          this.alert.title = this.alertMessages.disconnected.title;
          this.alert.text = this.alertMessages.disconnected.text;
          this.alert.icon = this.alertMessages.disconnected.icon;
          this.modal = true;
        }
        console.log('error status: ', error.status);
      }
    );
  }
}
