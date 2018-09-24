import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username: string;

  constructor(private http: Http) {
    this.username = 'Wess58';
  }


  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + '?client_id=' + environment.clientID + '?client_secret=' + environment.clientSecret).pipe(map(res => res.json()));
  }

  getRepo() {
    return this.http.get("https://api.github.com/users/" + this.username + '/repos?client_id=' + environment.clientID + '?client_secret=' + environment.clientSecret).pipe(map(res => res.json()));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
