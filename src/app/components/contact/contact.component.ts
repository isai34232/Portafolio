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
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: (response) => {
        this.loading = false;
        this.successMessage = '¡Mensaje enviado correctamente! Te responderemos pronto.';
        this.contactForm.reset();
        this.submitted = false;
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = 'Error al enviar el mensaje. Intenta de nuevo.';
        console.error('Error:', error);
      }
    });
  }

  downloadCV() {
    // Nombre del archivo CV que está en la carpeta assets
    const cvFileName = 'CV_Jaciel_Isai.pdf'; // Cambia esto al nombre de tu archivo
    const link = document.createElement('a');
    link.href = `assets/${cvFileName}`;
    link.download = cvFileName;
    link.click();
  }
}
