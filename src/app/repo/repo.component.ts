import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

    this.open = event.target.attributes.id && event.target.attributes.id.nodeValue === 'special';

    // if (event.target.attributes.id) {
    //   if (event.target.attributes.id.nodeValue === 'special') {
    //     this.open = true;
    //   } else {
    //     this.open = false;
    //   }
    // } else {
    //   this.open = false;
    // }

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
  page: number = 1;
  totalLength:number = 0;

  @ViewChild('searchUserInput') searchUserInput: ElementRef;


  constructor(
    public gitService: GitService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit() {

    this.getUser();
    this.page = +this.activatedRoute.snapshot.queryParams['page'] || 1;
    this.username = this.activatedRoute.snapshot.queryParams['name'] || 'wess58';

  }

  ngAfterViewInit(): void {
    fromEvent(this.searchUserInput.nativeElement, 'input')
      .pipe(map((event: Event) => (event.target as HTMLInputElement).value))
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .subscribe(data => this.searchUsers());
  }



  getUser(): void {

    const username = this.username.split(" ").join("").trim();

    if (username) {
      this.gitService.getProfileInfo(username).subscribe(
        (res: any) => {
          // console.log(res);
          this.error = false;
          this.profile = res.body;
          this.getRepos();

        },
        (error: any) => {
          this.error = true;
          // console.log('error', this.error);
        });
    }
  }

  getRepos(page: number = 1): void {
    this.loading = true;
    this.page = page;

    this.repos = [];
    const options = {
      per_page: 30,
      sort: 'updated',
      type:'public',
      page: page
    }


    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page,
        name: this.username.trim(),
      },
      queryParamsHandling: 'merge',
      replaceUrl: !this.activatedRoute.snapshot.queryParams['page']
    });


    this.gitService.getUserRepos(this.username.trim(), options).subscribe(
      res => {

        this.repos = res.body;
       
      },
      (error) => { },
      () => {
        this.loading = false;

      }
    );

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
