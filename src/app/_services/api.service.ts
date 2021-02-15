import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../app.component.configuration';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class APIService {
  private API_URL;

  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    this.API_URL = this.appConfig.getConfig().API_URL;
  }

  /*A generic GET function that takes an API endpoint and a list of parameters */
  get(url: string, ...params: any[]): Observable<any> {
    return this.http.get(this.API_URL + url + params.join('/'));
  }

  /* TODO in real world: Implement all REST functions*/
}
