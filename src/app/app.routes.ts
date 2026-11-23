import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { ContactList } from './components/contact-list/contact-list';
import { Playground } from './playground/playground';

export const routes: Routes = [
  {
    path: 'counter',
    component: Counter
  },
  {
    path: 'contacts',
    component: ContactList
  },
  {
    path: 'playground',
    loadChildren: () => import('./playground/playground.routes').then(m => m.PLAYGROUND_ROUTES)
  },
  {
    path: '**',
    component: Counter
  }
];
