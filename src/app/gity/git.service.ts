import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username: string;


  constructor(private http: Http) {

  }


  getProfileInfo(name: string) {
    return this.http.get("https://api.github.com/users/" + name + '?access_token=445d61b0ac00d28472817a20ef7d966b06d65905').pipe(map(res => res.json()));
  }

  getUserRepos(name: string) {
    return this.http.get("https://api.github.com/users/" + name + '/repos?access_token=445d61b0ac00d28472817a20ef7d966b06d65905').pipe(map(res => res.json()));

    // return this.http.get("https://api.github.com/users/" + name + '/repos?client_id=' + environment.clientID + '?client_secret=' + environment.clientSecret).pipe(map(res => res.json()));
  }

  getContributors(name:string ,repo:string){
    return this.http.get("https://api.github.com/repos/" + name +"/"+ repo +"/contributors" + '?access_token=445d61b0ac00d28472817a20ef7d966b06d65905').pipe(map(res => res.json()));

  }
}
