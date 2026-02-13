import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutImg = 'assets/images/about-image.png';
  aboutPoints = [
    {
      title: 'Mi Pasión por la Tecnología',
      desc: 'Desde pequeño me ha apasionado la tecnología. Me encanta descubrir nuevas herramientas y lenguajes de programación.'
    },
    {
      title: 'Desarrollo Full Stack',
      desc: 'Tengo experiencia en Frontend con Angular, React y Vue, también Backend con Node.js, Python y bases de datos MySQL, así como despliegues en Azure o AWS, y los lenguajes de programación que se dominan son C, C++, JAVA, PHP.'
    },
    {
      title: 'Proyectos Personales',
      desc: 'Me encanta crear mis propios proyectos para aprender e indagar sobre nuevas tecnologías, metodologías, arquitecturas y el diseño del software UML. '
    }
  ];
}
