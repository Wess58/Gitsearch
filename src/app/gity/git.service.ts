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
    return this.http.get("https://api.github.com/users/" + name + '?access_token=' + environment.hubTkn).pipe(map(res => res.json()));
  }

  getUserRepos(name: string) {
    return this.http.get("https://api.github.com/users/" + name + '/repos?access_token=' + environment.hubTkn).pipe(map(res => res.json()));

    // return this.http.get("https://api.github.com/users/" + name + '/repos?client_id=' + environment.clientID + '?client_secret=' + environment.clientSecret).pipe(map(res => res.json()));
  }

  getContributors(name:string ,repo:string){
    return this.http.get("https://api.github.com/repos/" + name +"/"+ repo +"/contributors" + '?access_token=' + environment.hubTkn).pipe(map(res => res.json()));

  }
}
