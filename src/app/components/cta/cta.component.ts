import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('elevatorContainer') elevatorContainer!: ElementRef;
  
  ctaTitle = 'No importa de donde vengas si no a donde quieres llegar...';
  ctaDesc = 'Explorando las fronteras del diseño moderno con CSS.';
  
  private scrollListener!: () => void;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeScrollAnimation();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private initializeScrollAnimation() {
    const container = this.elevatorContainer.nativeElement;

    this.scrollListener = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculamos el progreso: 0 cuando entra por abajo, 1 cuando sale por arriba
      const totalHeight = windowHeight + rect.height;
      const currentProgress = (windowHeight - rect.top) / totalHeight;
      
      const position = Math.max(0, Math.min(1, currentProgress));
      
      // Enviamos la posición al CSS
      container.style.setProperty('--scroll-position', position.toString());
    };

    window.addEventListener('scroll', this.scrollListener);
    // Ejecutar una vez al inicio para posicionar elementos
    this.scrollListener();
  }

  scrollToContact() {
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}