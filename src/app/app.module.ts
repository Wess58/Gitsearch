import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Headers } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { GitService } from './gity/git.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './routing/routing.module';
import { PriceDirective } from './price.directive';
import { PropPipe } from './prop.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    NotFoundComponent,
    PriceDirective,
    PropPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
