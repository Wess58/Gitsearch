import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Headers } from '@angular/http';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { GitService } from './gity/git.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './routing/routing.module';
import { PriceDirective } from './price.directive';
import { PropPipe } from './prop.pipe';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    NotFoundComponent,
    PriceDirective,
    PropPipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    NgProgressModule.forRoot(),// normal progress bar
    NgProgressHttpModule // progress bar to load http requests
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
