import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { CategoryEntities, ItemEntities } from './models/checklist.model';
import { InitializeChecklist } from './state/checklist.actions';

@Injectable({
  providedIn: 'root'
})
export class ChecklistEffects {
  @Effect()
  loadContent = this.httpClient
    .get<{
      categories: CategoryEntities;
      items: ItemEntities;
    }>('/assets/content.json')
    .pipe(map(({ categories, items }) => new InitializeChecklist({ categories, items })));

  constructor(private httpClient: HttpClient) {}
}
