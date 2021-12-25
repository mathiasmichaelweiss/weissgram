import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as type from '../../models/types/types';
import * as posts from '../../../assets/user-posts/user-posts.json';
import { DataFlowService } from './services/data-flow.service';

enum TextContainers {
  USER_NAME = 'USER_NAME',
  USER_INFO = 'USER_INFO'
}
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy, DoCheck {
  public userData: type.User = {
    name: 'Mathias Michael Weiß',
    nickName: '',
    following: 1000,
    followers: 3000,
    photo: '../assets/images/user-photo.png',
    background:
      'https://images.hdqwalls.com/download/mac-osx-sierra-lu-1366x768.jpg',
    id: '',
    post: [],
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quisquam quibusdam reprehenderit voluptatibus adipisci odio odit omnis aliquid beatae perferendis ullam laudantium dignissimos, vitae quidem. Iste nemo sed tenetur obcaecati et animi dolore quas, velit perspiciatis eveniet reiciendis quis atque facilis. Aperiam vitae sint minima praesentium! Aspernatur mollitia laudantium a eaque incidunt sapiente blanditiis quidem aut, minima, perferendis facilis quia molestias necessitatibus unde sint repellendus cumque earum neque iusto nesciunt nisi, quae aliquam omnis laboriosam! Enim, perspiciatis exercitationem dolorum quisquam repellat veritatis quo fugiat quae ex dignissimos et omnis amet libero nam tempora eaque nisi facilis, eveniet iure molestiae! Aut?'
  };
  public isUserNameChanging: boolean = false;
  public isUserInfoChanging: boolean = false;
  public newInfoTetx: string = 'Try again';
  private userTextValueSubcribtion: any;

  constructor(private readonly dataFlowService: DataFlowService) {}

  ngOnInit(): void {
    this.userData.post = Array.from(posts);
    this.userData.nickName = this.generateNickName(this.userData.name);
  }

  ngDoCheck(): void {
    this.dataFlowService.userTextValue$.subscribe(
      text => (this.userData.about = text)
    );
  }

  ngOnDestroy(): void {
    this.userTextValueSubcribtion.unsubscribe();
  }

  generateNickName(name: string): string {
    return (
      '@' +
      this.userData.name
        .split(' ')
        .map(item => item[0][0].toLowerCase())
        .join('') +
      Math.floor(Math.random() * 1000000)
    );
  }

  changeTextValue(textContainer?: string, textValue?: string): void {
    if (textContainer === TextContainers.USER_NAME && textValue) {
      this.userData.name = textValue;
      this.isUserNameChanging = !this.isUserNameChanging;
      this.userData.nickName = this.generateNickName(textValue);
    }
  }
}
