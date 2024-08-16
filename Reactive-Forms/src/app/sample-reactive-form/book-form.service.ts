import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookFormService {

  constructor() { }

  private books: Book[] = [
    {
      title:"First Book",
      author: "Souhardya",
      pages: 1,
      price: {
        currency:"INR",
        value:300
      },
      publishedDate:"2024-08-16",
      isPublished:true
    }
  ];

  public add(book: Book) {
    this.books.push(book);
    console.log("all books");
    console.log(this.books);
  }
}
