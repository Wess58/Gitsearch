import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from '../repo/repo.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'repo', component: RepoComponent },
  { path: "", redirectTo: "/repo", pathMatch: "full" },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    RouterModule,
    FormsModule,

  ],
  declarations: []
})

export class RoutingModule { }
