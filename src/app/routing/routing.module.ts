import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from '../repo/repo.component';
import { UserComponent } from '../user/user.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,


  ],
  exports: [
    RouterModule,
    FormsModule,

  ],
  declarations: []
})

export class RoutingModule { }
