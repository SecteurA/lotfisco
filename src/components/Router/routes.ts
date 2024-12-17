import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import { Contact } from '../../pages/Contact';
import { Services } from '../../pages/Services';
import { PrivacyPolicy, TermsOfUse } from '../../pages/Legal';
import { ReactElement } from 'react';

interface Route {
  path: string;
  component: () => ReactElement;
}

export const routes: Route[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/services/:serviceId',
    component: Services
  },
  {
    path: '/privacy',
    component: PrivacyPolicy
  },
  {
    path: '/terms',
    component: TermsOfUse
  }
];