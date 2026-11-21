import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { ContactList } from './components/contact-list/contact-list';

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
    path: '**',
    component: Counter
  }
];
