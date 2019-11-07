import { ConfigActions, ConfigActionTypes } from './config.actions';
import { ConfigState } from './config.state';

export const INITIAL_STATE: ConfigState = {
  title: 'Checklist',
  footerLinks: [
    {
      icon: ['fab', 'github'],
      href: 'https://github.com/typebytes/angular-checklist',
      text: 'GitHub'
    },
    {
      icon: 'hands-helping',
      href: 'https://github.com/typebytes/angular-checklist/blob/master/CONTRIBUTING.md',
      text: 'Contribute'
    }
  ]
};

export function configReducer(state = INITIAL_STATE, action: ConfigActions) {
  switch (action.type) {
    case ConfigActionTypes.INITIALIZE_CONFIG:
      return action.payload;
    default:
      return state;
  }
}
