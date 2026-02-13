import { Component } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico con carrito de compras, pasarela de pago y panel administrativo.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'Aplicación social con funcionalidades de feed, comentarios, likes y sistema de notificaciones en tiempo real.',
      technologies: ['React', 'Firebase', 'Redux', 'WebSocket'],
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Sistema de gestión de tareas con tableros Kanban, asignación de usuarios y seguimiento de progreso.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      link: '#'
    },
    {
      id: 4,
      title: 'Real Estate Portal',
      description: 'Portal inmobiliario con búsqueda avanzada, filtros, mapas interactivos y visualización 3D.',
      technologies: ['Angular', 'Mapbox', 'Google Maps', 'Three.js'],
      link: '#'
    },
    {
      id: 5,
      title: 'Learning Platform',
      description: 'Plataforma de educación en línea con cursos, videos, cuestionarios y certificados.',
      technologies: ['Next.js', 'Python', 'Django', 'MySQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'AI Chatbot',
      description: 'Chatbot inteligente con procesamiento de lenguaje natural y aprendizaje automático integrado.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
      link: '#'
    }
  ];
}
