import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from '../gity/git.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  profile: any[];
  repo: any[];
  username: string;

  service: GitService;
  constructor(serve: GitService, route: ActivatedRoute) {
    this.service = serve;
  }

  getUser() {
    this.service.updateProfile(this.username.split(" ").join("");
    this.service.getProfileInfo().subscribe(profile => {
      this.profile = profile;
    });
    this.service.getUser().subscribe(repo => {
      this.repo = repo;
    });
  }


  ngOnInit() {

  }

}
