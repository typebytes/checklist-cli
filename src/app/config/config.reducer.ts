import { ConfigActions, ConfigActionTypes } from './config.actions';
import { ConfigState } from './config.state';

export const INITIAL_STATE: ConfigState = {
  title: 'Checklist'
};

export function configReducer(state = INITIAL_STATE, action: ConfigActions) {
  switch (action.type) {
    case ConfigActionTypes.INITIALIZE_CONFIG:
      return action.payload;
    default:
      return state;
  }
}
