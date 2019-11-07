import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FooterLink {
  icon: IconProp;
  href: string;
  text: string;
}

export interface ConfigState {
  title: string;
  description: string;
  footerLinks: FooterLink[];
  about: string[];
}
