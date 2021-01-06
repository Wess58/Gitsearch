import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from '../gity/git.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  profile: any;
  repos: any[] = [];
  username: string = 'wess58';
  error: Boolean = false;
  // contributors:any[] = [];

  constructor(
    public gitService: GitService,
    protected route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.getUser();
  }

  getUser() {
    // console.log('username', this.username);

    this.gitService.getProfileInfo(this.username.split(" ").join("")).subscribe(profile => {
      this.profile = profile;
      // console.log('profile', this.profile);
      this.error = false;
      // console.log('error', this.error);

    },
      (error) => {
        this.error = true;
        // console.log('error', this.error);

      });

    this.getRepos();


  }

  getRepos(): void {
    this.gitService.getUserRepos(this.username.split(" ").join("")).subscribe(results => {
      this.repos = results;
      this.repos.sort((a, b) => b.id - a.id);
      console.log('repos', this.repos);

      this.repos.forEach(repo => {
        this.gitService.getContributors(this.username.split(" ").join(""), repo.name).subscribe(res => {
          repo.contributors = res;
          repo.description = repo.description.replace(/(https?:\/\/[^\s]+)/g, "LINK")

          // console.log(repo.stargazers_count);
          // console.log('contributors' , repo.name + " - " + repo.contributors.length);


        });

      });
    });

  }

}
