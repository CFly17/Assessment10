import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList: Book[] =
    [
      { title: "Harry Potter and the Chamber of Secrets", author: "JK Rowling", publicationYear: 1998 },
      { title: "The Outsiders", author: "S.E. Hinton", publicationYear: 1967 },
      { title: "Gone With the Wind", author: "Margaret Mitchell", publicationYear: 1936 },
    ]

  constructor() { }

  GetBooks() {
    return this.bookList;
  }

  AddBook(newBook: Book) {
    this.bookList.push(newBook);
  }

  DeleteBook(bookToBeDeleted: Book): void {
    let index = this.bookList.indexOf(bookToBeDeleted);
    this.bookList.splice(index, 1);
  }

}
