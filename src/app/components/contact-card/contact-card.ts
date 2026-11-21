import { Component, input, output } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
})
export class ContactCard {
  contact = input.required<Contact>()
  edit = output<Contact>()
  delete = output<number>()
  onDelete() {
    this.delete.emit(this.contact().id)
  }
  onEdit() {
    this.edit.emit(this.contact())
  }
}
