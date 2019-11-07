import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { InitializeConfig } from './config.actions';
import { ConfigState } from './config.state';

@Injectable({
  providedIn: 'root'
})
export class ConfigEffects {
  @Effect()
  loadConfig = this.httpClient
    .get<ConfigState>('/assets/config.json')
    .pipe(map(config => new InitializeConfig(config)));

  constructor(private httpClient: HttpClient) {}
}
