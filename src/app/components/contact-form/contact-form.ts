import { Component, effect, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  contactAdded = output<Contact>()
  contactToEdit = input<Contact | null>(null)
  contactUpdated = output<Contact>()

  constructor() {
    effect(() => {
      const contact = this.contactToEdit()
      if (contact) {
        this.contactForm.patchValue(contact)
      } else {
        this.contactForm.reset()
      }
    })
  }
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10)])
  })
  onSubmit() {
    if (this.contactForm.invalid) return
    const formValue = this.contactForm.getRawValue()
    const contact: Contact = {
      id: this.contactToEdit()?.id ?? Date.now(),
      name: formValue.name ?? '',
      email: formValue.email ?? '',
      phone: formValue.phone ?? '',
      isFavourite: this.contactToEdit()?.isFavourite ?? false,
    }
    if (this.contactToEdit()) {
      this.contactUpdated.emit(contact)
    } else {
      this.contactAdded.emit(contact)
    }
    this.contactForm.reset()
  }
}
