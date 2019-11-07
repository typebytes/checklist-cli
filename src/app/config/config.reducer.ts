import { ConfigActions, ConfigActionTypes } from './config.actions';
import { ConfigState } from './config.state';

export const INITIAL_STATE: ConfigState = {
  title: null,
  subtitle: null,
  description: null,
  footerLinks: [],
  about: []
};

export function configReducer(state = INITIAL_STATE, action: ConfigActions) {
  switch (action.type) {
    case ConfigActionTypes.INITIALIZE_CONFIG:
      return {
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        description: action.payload.description,
        footerLinks: action.payload.footerLinks || [],
        about: action.payload.about || []
      };
    default:
      return state;
  }
}
