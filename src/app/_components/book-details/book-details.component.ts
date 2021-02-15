import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  private _selectedBook;
  editedBook;

  @Input() editable;
  get selectedBook() { return this._selectedBook; };
  @Input() set selectedBook(book) {
    this._selectedBook = book;
    this.editedBook = {...book};
  };

  @Output() onEdit = new EventEmitter();

  constructor() {}

  ngOnInit() { }

  cancelEdit() {
    this.onEdit.emit();
  }

  confirmEdit() {
    //if (this.form.valid) {
      this.onEdit.emit(this.editedBook);
    //}
  }

  book() {
    return this.editable ? this.editedBook : this.selectedBook;
  }
}
