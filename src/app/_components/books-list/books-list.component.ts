import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/_services/book.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  selectedBook;
  editedBookIndex;
  books;
  searchedText;

  @Input() set editedBook(book) {
    if (!book) return;

    if (this.editedBookIndex != null) {
      this.books[this.editedBookIndex] = book;
      this.selectedBook = book;
    }
    else
      this.books = [book, ...this.books];

    this.editedBookIndex = null;
  };

  @Output() onSelect = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(res => {
        this.books = res.books;
      });
  }

  select(book?) {
    this.selectedBook = book;
    this.onSelect.emit(book);
  }

  remove(book) {
    this.books = this.books.filter(b => b.isbn != book.isbn);
    this.onSelect.emit();
  }

  edit(book) {
    this.selectedBook = book;
    this.editedBookIndex = this.books.findIndex(b => b.isbn == book.isbn);
    this.onEdit.emit(book);
  }
}
