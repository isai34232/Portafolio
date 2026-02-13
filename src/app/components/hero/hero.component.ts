import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  heroLabel = 'Hola mi nombre es';
  heroTitle = 'Hernández Ramírez Jaciel Isai ';
  heroDesc = 'Egresado de la escuela superior de cómputo del IPN, apasionado por la tecnología, actualmente soy junior developer, me gusta desarrollar, diseñar, crear e indagar acerca de nuevas tecnologías para la implementación de mis proyectos.';
  heroImg = 'assets/images/hero-image.png';

  scrollToContact() {
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
