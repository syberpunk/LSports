import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { shareReplay } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  private readonly CONFIG_URL = 'assets/config/config.json';
  private appConfig;

  constructor(private http: HttpClient) {}

  loadAppConfig() {
    return this.http
      .get(this.CONFIG_URL)
      .pipe(shareReplay(1))
      .toPromise()
      .then((configuration) => {
        this.appConfig = configuration;
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
