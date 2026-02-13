import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'assets/images/linkedin-svgrepo-com.svg', label: 'LinkedIn', url: 'https://www.linkedin.com/in/hern%C3%A1ndez-ram%C3%ADrez-jaciel-isai-32b49b2ab/' },
    { icon: 'assets/images/github-svgrepo-com.svg', label: 'GitHub', url: 'https://github.com/isai34232' },
    { icon: 'assets/images/facebook-svgrepo-com (1).svg', label: 'Facebook', url: 'https://www.facebook.com/jaciel.isai.0' }
  ];

  footerLinks = [
    { text: 'Inicio', url: '#' },
    { text: 'Sobre mí', url: '#about' },
    { text: 'Proyectos', url: '#projects' },
    { text: 'Contacto', url: '#contact' }
  ];
}
