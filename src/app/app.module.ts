import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { AppConfigService } from './app.component.configuration';
import { AppComponent } from './app.component';
import { BooksListComponent } from './_components/books-list/books-list.component';
import { BookDetailsComponent } from './_components/book-details/book-details.component';
import { BookService } from './_services/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './_pipes/filter/filter.pipe';

const appInitializerFn = (configuration: AppConfigService) => {
  return () => {
    return configuration.loadAppConfig();
  };
};

@NgModule({
  declarations: [AppComponent, BooksListComponent, BookDetailsComponent, FilterPipe],
  imports: [BrowserModule, CommonModule, HttpClientModule, VirtualScrollerModule, FormsModule, ReactiveFormsModule],
  providers: [
    AppConfigService,
    BookService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
