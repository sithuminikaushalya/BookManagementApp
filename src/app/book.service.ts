import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'Sample Book', author: 'Author Name', isbn: '123456', publicationDate: new Date() }
  ];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book) {
    book.id = this.books.length ? this.books[this.books.length - 1].id + 1 : 1;
    this.books.push(book);
  }

  updateBook(updatedBook: Book) {
    const index = this.books.findIndex(b => b.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }
}
