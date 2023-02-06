import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Headers } from '@angular/http';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { GitService } from './gity/git.service';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { CountCheckerPipe } from './pipes/count-checker.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    CountCheckerPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
