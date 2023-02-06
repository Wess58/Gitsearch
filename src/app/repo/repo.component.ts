import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { style, animate, transition, trigger } from '@angular/animations';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { GitService } from '../gity/git.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
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

  @ViewChild('searchUserInput') searchUserInput: ElementRef;


  constructor(
    public gitService: GitService,
    protected route: ActivatedRoute
  ) { }


  ngOnInit() {

    this.getUser();

  }

  ngAfterViewInit(): void {
    fromEvent(this.searchUserInput.nativeElement, 'input')
      .pipe(map((event: Event) => (event.target as HTMLInputElement).value))
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .subscribe(data => this.searchUsers());
  }



  getUser(): void {
    // console.log('username', this.username);

    const username = this.username.split(" ").join("").trim();

    if (username) {
      this.gitService.getProfileInfo(username).subscribe(
        (res: any) => {
          // console.log(res);
          this.error = false;
          this.profile = res.body;
          this.getRepos(username);

        },
        (error: any) => {
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

  searchUsers(): void {
    // console.log('username', this.username);

    const username = this.username.replace(/\s/g, '').trim();

    if (username) {
      this.usersList = [];
      this.loadingUsers = true;
      this.searchError = false;


      this.gitService.searchUsers(username).subscribe(
        (res: any) => {
          // console.log(res);

          this.searchError = false;
          this.usersList = res.body.items;

        },
        (error: any) => {
          this.searchError = true;
          // console.log('error', this.error);
        },
        () => {
          this.loadingUsers = false;

        });
    }

  }

}
