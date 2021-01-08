import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username: string;


  constructor(private http: Http) {

  }


  getProfileInfo(name: string) {
    var token = environment.hubTkn;
    // console.log(token);

    return this.http.get("https://api.github.com/users/" + name + '?access_token=' + token).pipe(map(res => res.json()));
  }

  getUserRepos(name: string) {
    var token = environment.hubTkn;

    return this.http.get("https://api.github.com/users/" + name + '/repos?access_token=' + token).pipe(map(res => res.json()));

    // return this.http.get("https://api.github.com/users/" + name + '/repos?client_id=' + environment.clientID + '?client_secret=' + environment.clientSecret).pipe(map(res => res.json()));
  }

  getContributors(name: string, repo: string) {
    var token = environment.hubTkn;

    return this.http.get("https://api.github.com/repos/" + name + "/" + repo + "/contributors" + '?access_token=' + token).pipe(map(res => res.json()));

  }
}
