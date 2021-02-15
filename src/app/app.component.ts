import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Book } from './_models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LSports';
  selectedBook;
  editedBook;
  editable = false;

  constructor() {}

  onSelect(book) {
    this.selectedBook = book;
  }

  editBook(book) {
    this.selectedBook = book;
    this.editable = true;
  }

  addBook() {
    this.editBook(new Book());
  }

  onEdit(result) {
    this.editable = false;
    this.selectedBook = result;
    this.editedBook = result;
  }
}
