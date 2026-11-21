import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts = signal<Contact[]>([
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      phone: '9876543210',
      isFavourite: true
    },
    {
      id: 2,
      name: 'Amit Verma',
      email: 'amit@gmail.com',
      phone: '9876543211',
      isFavourite: false
    },
    {
      id: 3,
      name: 'Priya Jain',
      email: 'priya@gmail.com',
      phone: '9876543212',
      isFavourite: false
    }
  ]);
  getContacts() {
    return this.contacts()
  }
  addContact(c: Contact) {
    this.contacts.update(nc => [...nc, c])
  }
  deleteContact(id: number) {
    this.contacts.update(c => c.filter(i => i.id !== id))
  }
  updateContact(contact: Contact) {
    this.contacts.update(c=>c.map(i => i.id === contact.id ? contact : i))
  }
}
