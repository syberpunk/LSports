import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { AppConfigService } from '../app.component.configuration';

@Injectable({ providedIn: 'root' })
export class BookService {
  private BOOKS_URL;

  constructor(private apiService: APIService, private appConfig: AppConfigService) {
    this.BOOKS_URL = this.appConfig.getConfig().BOOKS_URL;
  }

  getBooks() {
    return this.apiService.get(this.BOOKS_URL);
  }
}
