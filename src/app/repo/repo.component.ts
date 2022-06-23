import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from '../gity/git.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @HostListener('document:click', ['$event']) onClick(event: any) {
    // console.log(event.target.attributes);

    if (event.target.attributes.id) {
      if (event.target.attributes.id.nodeValue === 'special') {
        this.open = true;
      } else {
        this.open = false;
      }
    } else {
      this.open = false;
    }

  }

  profile: any;
  repos: any;
  username: string = 'wess58';
  error: Boolean = false;
  loading = false;
  usersList: any;
  open = false;
  searchError = false;
  loadingUsers = false;
  // contributors:any[] = [];
  //



  constructor(
    public gitService: GitService,
    protected route: ActivatedRoute
  ) { }


  ngOnInit() {

    this.getUser();

  }

  getUser() {
    // console.log('username', this.username);

    const username = this.username.split(" ").join("").trim();

    if (username) {
      this.gitService.getProfileInfo(username).subscribe(
        (res) => {

          // console.log(res);

          this.profile = res.body;
          this.getRepos(username);

          this.error = false;

        },
        (error) => {
          this.error = true;
          // console.log('error', this.error);

        });
    }



  }

  getRepos(username: string): void {
    this.loading = true;

    this.repos = [];
    this.gitService.getUserRepos(username).subscribe(
      res => {
        // console.log(res);

        this.repos = res.body;
        this.repos.sort((a, b) => b.id - a.id);

        // if (this.repos) {
        //   this.getContributors();
        // }
        // console.log('repos', this.repos);

      },
      (error) => { },
      () => {
        this.loading = false;

      }
    );

  }

  getContributors(): void {

    this.repos.forEach(repo => {
      this.gitService.getContributors(this.username.split(" ").join("").trim(), repo.name).subscribe(res => {
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

  searchUsers() {
    // console.log('username', this.username);
    this.searchError = false;

    const username = this.username.split(" ").join("").trim();

    if (username) {
      this.usersList = [];
      this.loadingUsers = true;

      this.gitService.searchUsers(username).subscribe(
        (res) => {
          // console.log(res);

          this.searchError = false;
          this.usersList = res.body.items;

        },
        (error) => {
          this.searchError = true;
          // console.log('error', this.error);
        },
        () => {
          this.loadingUsers = false;

        });
    }

  }

}
