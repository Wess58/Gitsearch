import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username: string;
  token: string = environment.accessToken;


  constructor(private http: Http) {

    this.username = "wess58";

  }


  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + '?access_token=' + this.token).pipe(map(res => res.json()));
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + '/repos?access_token=' + this.token).pipe(map(res => res.json()));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
