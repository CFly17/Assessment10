import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
