import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Headers } from '@angular/http';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { GitService } from './gity/git.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './routing/routing.module';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    NgProgressModule.forRoot(),// normal progress bar
    NgProgressHttpModule, // progress bar to load http requests
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
