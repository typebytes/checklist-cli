import { ConfigActions, ConfigActionTypes } from './config.actions';
import { ConfigState } from './config.state';

export const INITIAL_STATE: ConfigState = {
  title: 'Angular Checklist',
  subtitle: 'Curated list of common mistakes made when developing Angular applications.',
  description: `Angular Checklist is a curated list of best practices for Angular apps. It’s a todo application where each item represents \
one best practice. You can use it for code reviews or as a style guide for your applications.`,
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
  ],
  about: [
    `Angular Checklist is a curated list of best practices that we believe every application should follow in order to avoid some common \
pitfalls.`,
    `The idea is that for all your projects, you can go over the checklist and see which items your projects already comply with and which \
you still have to put in some more effort!`,
    `If you follow the items in this list, your project will definitely be on track to success 🏆!`
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
