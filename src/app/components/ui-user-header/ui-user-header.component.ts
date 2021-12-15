import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-user-header',
  templateUrl: './ui-user-header.component.html',
  styleUrls: ['./ui-user-header.component.css']
})
export class UiUserHeaderComponent implements OnInit {
  public userPhoto: string = '../assets/images/user-photo.png';
  public userName: string = 'Mathias Michael Weiß';

  constructor() {}

  ngOnInit(): void {}
}
