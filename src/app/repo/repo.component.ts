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

  getRepo() {
    this.service.updateProfile(this.username);
    this.service.getProfileInfo().subscribe(profile => {
      this.profile = profile;
    });
    this.service.getRepo().subscribe(repo => {
      this.repo = repo;
    });
  }


  ngOnInit() {
  }

}
