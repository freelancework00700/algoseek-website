import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-why-algoseek',
  styleUrl: './why-algoseek.component.scss',
  templateUrl: './why-algoseek.component.html',
})
export class WhyAlgoseekComponent {
  @ViewChild('sectionRef') sectionRef: ElementRef | undefined;

  ngAfterViewInit(): void {    
    this.observeSection();
  }

  observeSection(): void {
    const options = {
      threshold: 0.6 // triggers when 60% of screen is in view
    };

    const observer = new IntersectionObserver(this.startSparkleAnimation.bind(this), options);
    if (this.sectionRef) {
      observer.observe(this.sectionRef.nativeElement);
    }
  }

  startSparkleAnimation(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.triggerAnimation();
      } else {
        this.resetAnimations();
      }
    });
  }

  triggerAnimation(): void {
    const sparkleElements = document.querySelectorAll('.spark-line');
    if (sparkleElements) {
      sparkleElements.forEach((element, index) => {
        element.classList.add(`spark-line-${index + 1}`);
      });
    }
  }
  
  resetAnimations(): void {
    const sparkleElements = document.querySelectorAll('.spark-line');
    sparkleElements.forEach((element) => {
      const sparkleElement = element as HTMLElement;
      sparkleElement.classList.remove('spark-line-1', 'spark-line-2', 'spark-line-3', 'spark-line-4', 'spark-line-5');
      void sparkleElement.offsetWidth;
    });
  }
}
