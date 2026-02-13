import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navItems = [
    { name: 'Inicio', active: true, section: 'inicio' },
    { name: 'Resumen', active: false, section: 'resumen' },
    { name: 'Mis proyectos', active: false, section: 'proyectos' },
    { name: 'Contacto', active: false, section: 'contacto' }
  ];

  setActive(index: number) {
    this.navItems.forEach((item, i) => {
      item.active = i === index;
    });
    
    const section = this.navItems[index].section;
    this.scrollToSection(section);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
