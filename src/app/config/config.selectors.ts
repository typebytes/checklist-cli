import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConfigState } from './config.state';

export namespace ConfigSelectors {
  export const getConfigState = createFeatureSelector<ConfigState>('config');

  export const getTitle = createSelector(
    getConfigState,
    config => config.title
  );

  export const getFooterLinks = createSelector(
    getConfigState,
    config => config.footerLinks
  );

  export const getAbout = createSelector(
    getConfigState,
    config => config.about
  );
}
