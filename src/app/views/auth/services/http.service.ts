import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = 'http://localhost:5200/';
  private authParams: any = {
    title: 'Authentication',
    isLogin: true
  };
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url);
  }

  authUser(
    link: string,
    user: { email: string; username: string; password: string }
  ) {
    console.log(this.url + link);
    const data = {
      email: user.email,
      username: user.username,
      password: user.password
    };

    return this.http.post(this.url + link, data);
  }

  postUser() {}
}
