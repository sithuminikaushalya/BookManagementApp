import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {
  books: Book[] = [];
  currentBook: Book = { id: 0, title: '', author: '', isbn: '', publicationDate: new Date() };
  isEditing = false;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.books = this.bookService.getBooks();
  }

  onSubmit() {
    if (this.isEditing) {
      this.bookService.updateBook(this.currentBook);
    } else {
      this.bookService.addBook(this.currentBook);
    }
    this.resetForm();
    this.loadBooks();
  }

  editBook(book: Book) {
    this.currentBook = { ...book };
    this.isEditing = true;
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id);
    this.loadBooks();
  }

  resetForm() {
    this.currentBook = { id: 0, title: '', author: '', isbn: '', publicationDate: new Date() };
    this.isEditing = false;
  }
}
