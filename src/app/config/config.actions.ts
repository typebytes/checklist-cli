import { Action } from '@ngrx/store';
import { CategoryEntities, ItemEntities } from '../checklist/models/checklist.model';
import { ConfigState } from './config.state';

export enum ConfigActionTypes {
  INITIALIZE_CONFIG = '[Config] initialize config'
}

export class InitializeConfig implements Action {
  readonly type = ConfigActionTypes.INITIALIZE_CONFIG;

  constructor(public payload: ConfigState) {}
}

export type ConfigActions = InitializeConfig;
