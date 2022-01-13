import {
  Component,
  OnInit,
  Input,
  DoCheck,
  AfterViewInit,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from '@angular/core';
import { ShowAlertServiceService } from './show-alert-service.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, DoCheck {
  @ViewChild('alert', { read: ElementRef })
  alert?: ElementRef;

  @Input()
  content: { title: string; icon: string; text: string } = {
    title: '',
    icon: '',
    text: ''
  };

  @Input() authStatus: string = '';
  modal: boolean = false;

  icon?: string;
  color: string = '#f88138';
  constructor(private readonly showAlertService: ShowAlertServiceService) {}

  ngOnInit(): void {
    if (this.content.icon)
      this.icon = [this.content.icon, 'p-0 col-1 m-0'].join(' ');
    if (this.authStatus === 'DISCONNECTED') this.color = '#FF4C34';
    if (this.authStatus === 'SUCCES') this.color = '#009883';
    if (this.authStatus === 'ALREADY_REGISTERED') this.color = '#F88138';
  }

  ngDoCheck(): void {}

  public close(): void {
    this.showAlertService.getIsModal(this.modal);
  }
}
