//imported to do navigation / path specifications

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: 'book-list', component: BookListComponent },
      ]
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
