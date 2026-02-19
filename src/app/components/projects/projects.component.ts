import { Component } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string; 
  file?: string; // archivo a descargar
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
      title: 'Tesis: Sistema web y móvil para la orientación vocacional de las carreras impartidas en la Escuela Superior de Cómputo',
      description: 'Sistema web y aplicación móvil de orientación vocacional para aspirantes de la Escuela Superior de Cómputo del Instituto Politécnico Nacional, que evalúa aptitudes, intereses y preferencias mediante pruebas interactivas para apoyar la elección de carrera.',
      technologies: ['Angular', 'Node.js', 'MySQL', 'AWS','Python','IA','Java'],
      link: '#'
    },
    {
      id: 2,
      title: 'Sistema de en matemáticas y física para estudiantes de nivel superior del IPN',
      description: 'Desarrollo de sistema web educativo para la resolución y evaluación de ejercicios de matemáticas y física, con seguimiento del progreso académico de los estudiantes.',
      technologies: ['PHP', 'HTML', 'CSS', 'JS', 'MySQL'],
      link: '#',
      file: 'certificado.pdf'
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


   downloadProject(fileName: string) {

    const link = document.createElement('a');

    link.href = `assets/${fileName}`;

    link.download = fileName;

    link.click();

  }
  openProject(project: Project) {

  // Si tiene archivo → descargar
  if (project.file) {

    const link = document.createElement('a');

    link.href = `assets/${project.file}`;

    link.download = project.file;

    link.click();

    return;

  }

  // Si tiene link → abrir página
  if (project.link && project.link !== '#') {

    window.open(project.link, '_blank');

    return;

  }

  console.warn('Proyecto sin archivo ni link');

}

}
