import { InitializeChecklist } from './state/checklist.actions';
import { mapTo, tap } from 'rxjs/operators';
import { CategoryEntities, ItemEntities } from './models/checklist.model';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ApplicationState } from '../state/app.state';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChecklistInitializer {
  constructor(private _httpClient: HttpClient, private _store: Store<ApplicationState>) {}

  initialize() {
    return this._httpClient
      .get<{
        categories: CategoryEntities;
        items: ItemEntities;
      }>('/assets/content.json')
      .pipe(
        tap(({ categories, items }) => this._store.dispatch(new InitializeChecklist({ categories, items }))),
        mapTo(null)
      );
  }
}
