import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit, OnDestroy {
  @ViewChild('elevatorContainer') elevatorContainer!: ElementRef;
  
  ctaTitle = 'No importa de donde vengas si no a donde queires llegar...';
  ctaDesc = '';
  
  private scrollListener!: () => void;
  private intersectionObserver!: IntersectionObserver;

  ngOnInit() {
    this.initializeElevatorAnimation();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private initializeElevatorAnimation() {
    setTimeout(() => {
      if (!this.elevatorContainer) return;

      const container = this.elevatorContainer.nativeElement;

      // Observer para detectar cuando el elemento está visible
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add('active');
          } else {
            container.classList.remove('active');
          }
        });
      });

      this.intersectionObserver.observe(container);

      // Listener de scroll para controlar la animación
      this.scrollListener = () => {
        const rect = container.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight && elementBottom > 0) {
          // El elemento está visible
          const scrollRange = elementBottom - elementTop;
          const visibleRange = Math.min(windowHeight, elementBottom) - Math.max(0, elementTop);
          const scrollProgress = 1 - (visibleRange / scrollRange);
          
          const position = Math.max(0, Math.min(1, scrollProgress));
          container.style.setProperty('--scroll-position', position.toString());
        }
      };

      window.addEventListener('scroll', this.scrollListener);
    }, 100);
  }

  scrollToContact() {
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
