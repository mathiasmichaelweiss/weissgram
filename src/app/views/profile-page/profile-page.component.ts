import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as type from '../../models/types/types';
import * as posts from '../../../assets/user-posts/user-posts.json';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  public userData: type.User = {
    name: 'Mathias Michael Weiß',
    nickName: '',
    following: 1000,
    followers: 3000,
    photo: '../assets/images/user-photo.png',
    background:
      'https://images.hdqwalls.com/download/mac-osx-sierra-lu-1366x768.jpg',
    id: '',
    post: Array.from(posts)
  };
  public isUserNameChanging: boolean = false;
  public isUserInfoChanging: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.userData.nickName = this.generateNickName(this.userData.name);
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

  changeUserName(data: NgForm): void {
    const name = data.value.user_name;

    this.userData.name = name;
    this.isUserNameChanging = !this.isUserNameChanging;
    this.userData.nickName = this.generateNickName(name);
  }
}
