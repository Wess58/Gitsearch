import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username: string;
  constructor(private http: HttpClient) {
  }

  getProfileInfo(name: string) {
    return this.http.get<any>("https://api.github.com/users/" + name, { observe: 'response' });
  }

  getUserRepos(name: string) {
    return this.http.get<any>("https://api.github.com/users/" + name + '/repos?per_page=150', { observe: 'response' });
  }

  getContributors(name: string, repo: string) {
    return this.http.get<any>("https://api.github.com/repos/" + name + "/" + repo + "/contributors", { observe: 'response' });
  }

  searchUsers(name:string){
    return this.http.get<any>("https://api.github.com/search/users?q=" + name , { observe: 'response' });

  }
}
