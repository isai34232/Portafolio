import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

 onSubmit() {

  this.submitted = true;

  if (this.contactForm.invalid) return;

  this.sendWhatsAppMessage();

  this.successMessage = 'Mensaje enviado correctamente';

  this.contactForm.reset();

  this.submitted = false;

}



  downloadCV() {
    
    const cvFileName = 'CV.pdf'; 
    const link = document.createElement('a');
    link.href = `assets/${cvFileName}`;
    link.download = cvFileName;
    link.click();
  }




sendWhatsAppMessage() {

  const phone = '5580041906'; 
  const name = this.contactForm.value.name;
  const email = this.contactForm.value.email;
  const subject = this.contactForm.value.subject;
  const message = this.contactForm.value.message;

  const text = `Hola, mi nombre es ${name}.
Email: ${email}
Asunto: ${subject}
Mensaje: ${message}`;

  const encodedText = encodeURIComponent(text);

  const url = `https://wa.me/${phone}?text=${encodedText}`;

  window.open(url, '_blank');

}







}
