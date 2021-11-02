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
  repos: any;
  username: string = 'wess58';
  error: Boolean = false;
  loading = false;
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
    this.loading = true;

    this.gitService.getProfileInfo(this.username.split(" ").join("")).subscribe(
      res => {

        // console.log(res);

        this.profile = res.body;
        this.getRepos();

        this.loading = false;
        this.error = false;

      },
      (error) => {
        this.error = true;
        // console.log('error', this.error);

      });



  }

  getRepos(): void {
    this.gitService.getUserRepos(this.username.split(" ").join("")).subscribe(
      res => {

        // console.log(res);

        this.repos = res.body;
        this.repos.sort((a, b) => b.id - a.id);

        if (this.repos) {
          this.getContributors();
        }
        // console.log('repos', this.repos);

      });

  }

  getContributors(): void {

    this.repos.forEach(repo => {
      this.gitService.getContributors(this.username.split(" ").join(""), repo.name).subscribe(res => {
        // console.log(res);

        repo.contributors = res.body;

        if (repo.description !== null && repo.description !== undefined) {
          repo.description = repo.description.replace(/(https?:\/\/[^\s]+)/g, "LINK")
        }

        // console.log(repo.stargazers_count);
        // console.log('contributors' , repo.name + " - " + repo.contributors.length);


      });

    });
  }

}
