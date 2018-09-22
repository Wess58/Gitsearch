import { Component, OnInit } from '@angular/core';
import { GitService } from '../gity/git.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  service: GitService;
  constructor(serve: GitService) {
    this.service = serve;
  }
  getUser(){
    // this.GitService. updateGit(this.username);
    // this.GitService.getGitInfo().subscribe(Git => {
    //   console.log(Git);
    //   this.Git = Git;
    // });
    // this.GitService.getRepos().subscribe(repos => {
    //   console.log(repos);
    //   this.repos = repos;
    // });

  }

  ngOnInit() {
  }

}
