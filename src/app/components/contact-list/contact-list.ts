import { Component, computed, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactCard } from '../contact-card/contact-card';
import { ContactForm } from '../contact-form/contact-form';
import { ContactService } from '../../services/contact';


@Component({
  selector: 'app-contact-list',
  imports: [ContactCard, ContactForm],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  selectedContact: Contact | null = null
  contacts: Contact[] = [];
  // constructor(private contactService: ContactService) {
  //   this.contacts = this.contactService.getContacts()
  // }
  contactService = inject(ContactService)
  totalContacts = computed(() => this.contactService.contacts().length)
  addContact(c: Contact) {
    this.contactService.addContact(c)
  }
  deleteContact(id: number) {
    this.contactService.deleteContact(id)
    // this.contacts = this.contactService.getContacts()
  }
  editContact(contact: Contact) {
    this.selectedContact = contact
  }
  updateContact(contact: Contact) {
    this.contactService.updateContact(contact)
    // this.contacts = this.contactService.getContacts()
    this.selectedContact = null
  }
}
