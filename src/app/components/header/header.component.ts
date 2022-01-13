import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public visible = true;
  constructor() {}

  ngOnInit(): void {
    const currentHref = window.location.href;
    const endpoint = currentHref.slice(-4);
    const alternativeEndpoint = currentHref.slice(-1);

    if (endpoint === 'auth' || alternativeEndpoint === '/')
      this.visible = false;
  }
}
