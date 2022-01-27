import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {


  bookList: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookList = this.bookService.GetBooks();
    console.log(this.bookList);
  }

  DeleteBook(bookToBeDeleted: Book): void {
    this.bookService.DeleteBook(bookToBeDeleted);
  }

  AddBook(): void {

    let title: string = (<HTMLInputElement>document.getElementById("title")).value;
    let author: string = (<HTMLInputElement>document.getElementById("author")).value;
    let publicationYear: number = (<HTMLInputElement>document.getElementById("publicationYear")).valueAsNumber;
    let bookToBeAdded = { title: title, author: author, publicationYear: publicationYear };

    this.bookService.AddBook(bookToBeAdded);

    this.bookList = this.bookService.GetBooks();
  }

}