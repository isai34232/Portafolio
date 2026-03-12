import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'assets/images/linkedin-svgrepo-com.svg', label: 'LinkedIn', url: 'https://www.linkedin.com/in/jaciel-isai-hern%C3%A1ndez-ram%C3%ADrez-32b49b2ab/' },
    { icon: 'assets/images/github-svgrepo-com.svg', label: 'GitHub', url: 'https://github.com/isai34232' },
    { icon: 'assets/images/facebook-svgrepo-com (1).svg', label: 'Facebook', url: 'https://www.facebook.com/jaciel.isai.0' }
  ];

  // 1. Alineamos los IDs de las secciones con los del Header
  footerLinks = [
    { text: 'Inicio', section: 'inicio' },
    { text: 'Sobre mí', section: 'resumen' }, // Cambiado para coincidir con el header
    { text: 'Proyectos', section: 'proyectos' },
    { text: 'Contacto', section: 'contacto' }
  ];

  // 2. Añadimos la función de scroll
  navigateToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}