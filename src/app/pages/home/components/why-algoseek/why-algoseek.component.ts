import { Component, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-why-algoseek',
  styleUrl: './why-algoseek.component.scss',
  templateUrl: './why-algoseek.component.html',
})
export class WhyAlgoseekComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sectionRef') sectionRef!: ElementRef;
  observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observeSection();
  }

  observeSection(): void {
    const options = {
      threshold: [0.1], // triggers when 10% of screen is in view
    };

    this.observer = new IntersectionObserver(this.startSparkleAnimation.bind(this), options);
    if (this.sectionRef) {
      this.observer.observe(this.sectionRef.nativeElement);
    }
  }

  startSparkleAnimation(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.triggerAnimation();
      } else {
        this.resetAnimations();
      }
    });
  }

  triggerAnimation(): void {
    const sparkleElements = document.querySelectorAll<HTMLElement>('.spark-line');
    if (sparkleElements) {
      sparkleElements.forEach((element, index) => {
        element.classList.add(`spark-line-${index + 1}`);
      });
    }
  }

  resetAnimations(): void {
    const sparkleElements = document.querySelectorAll<HTMLElement>('.spark-line');
    sparkleElements.forEach((element) => {
      element.classList.remove('spark-line-1', 'spark-line-2', 'spark-line-3', 'spark-line-4', 'spark-line-5');
      void element.offsetWidth;
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
