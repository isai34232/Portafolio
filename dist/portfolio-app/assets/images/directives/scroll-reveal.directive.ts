import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements OnInit {
  private isVisible = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkVisibility();
  }

  private checkVisibility() {
    if (this.isVisible) return;

    const element = this.el.nativeElement;
    const position = element.getBoundingClientRect();
    const isInViewport = position.top < window.innerHeight && position.bottom > 0;

    if (isInViewport) {
      element.classList.add('visible');
      this.isVisible = true;
    }
  }
}
