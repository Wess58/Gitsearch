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
  endPart:any = '2czyM0kXjFJ';
  // new token
  // ghp_embRIRr39sZBpk5GbQsfjIcVr
  //  2czyM0kXjFJ



  constructor(private http: Http) {
    // this.token = config.MY_API_TOKEN;
    // console.log(this.token);

  }


  getProfileInfo(name: string) {
    // console.log(token);

    return this.http.get("https://api.github.com/users/" + name + '?access_token=' + 'ghp_embRIRr39sZBpk5GbQsfjIcVr' + this.endPart).pipe(map(res => res.json()));
  }

  getUserRepos(name: string) {

    return this.http.get("https://api.github.com/users/" + name + '/repos?access_token=' + 'ghp_embRIRr39sZBpk5GbQsfjIcVr' + this.endPart).pipe(map(res => res.json()));

    // return this.http.get("https://api.github.com/users/" + name + '/repos?client_id=' + environment.clientID + '?client_secret=' + environment.clientSecret).pipe(map(res => res.json()));
  }

  getContributors(name: string, repo: string) {

    return this.http.get("https://api.github.com/repos/" + name + "/" + repo + "/contributors" + '?access_token=' + 'ghp_embRIRr39sZBpk5GbQsfjIcVr' + this.endPart).pipe(map(res => res.json()));

  }
}
