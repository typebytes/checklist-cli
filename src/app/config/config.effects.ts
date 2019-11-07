import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Effect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { ApplicationState } from '../state/app.state';
import { InitializeConfig } from './config.actions';
import { ConfigSelectors } from './config.selectors';
import { ConfigState } from './config.state';

@Injectable({
  providedIn: 'root'
})
export class ConfigEffects {
  @Effect()
  loadConfig = this.httpClient
    .get<ConfigState>('/assets/config.json')
    .pipe(map(config => new InitializeConfig(config)));

  @Effect({ dispatch: false })
  updateTitle = this.store.pipe(select(ConfigSelectors.getTitle)).pipe(tap(title => this.titleService.setTitle(title)));

  constructor(private httpClient: HttpClient, private store: Store<ApplicationState>, private titleService: Title) {}
}
