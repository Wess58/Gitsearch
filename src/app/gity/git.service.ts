import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username: string;
  token: string;
  endPart:number = 63302;



  constructor(private http: Http) {
    // this.token = config.MY_API_TOKEN;
    // console.log(this.token);

  }


  getProfileInfo(name: string) {
    // console.log(token);

    return this.http.get("https://api.github.com/users/" + name + '?access_token=' + 'cc70875fd30210b00794ec747a1a6ce0ebe' + this.endPart.toString()).pipe(map(res => res.json()));
  }

  getUserRepos(name: string) {

    return this.http.get("https://api.github.com/users/" + name + '/repos?access_token=' + 'cc70875fd30210b00794ec747a1a6ce0ebe' + this.endPart.toString()).pipe(map(res => res.json()));

    // return this.http.get("https://api.github.com/users/" + name + '/repos?client_id=' + environment.clientID + '?client_secret=' + environment.clientSecret).pipe(map(res => res.json()));
  }

  getContributors(name: string, repo: string) {

    return this.http.get("https://api.github.com/repos/" + name + "/" + repo + "/contributors" + '?access_token=' + 'cc70875fd30210b00794ec747a1a6ce0ebe' + this.endPart.toString()).pipe(map(res => res.json()));

  }
}
