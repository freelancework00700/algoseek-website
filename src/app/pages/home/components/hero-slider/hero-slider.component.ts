import Typed from 'typed.js';
import { TYPED_OPTIONS } from '../../../../core/constants';
import { HomePageHeroSlider } from '../../../../core/interfaces';
import { HomeService } from '../../../../shared/services/home.service';
import { Component, effect, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  styleUrl: './hero-slider.component.scss',
  templateUrl: './hero-slider.component.html',
})
export class HeroSliderComponent implements OnDestroy {
  currentWordIndex: number = 0;
  typedInstance: Typed | null = null;
  slides: HomePageHeroSlider[] | null | undefined = [];
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  constructor(private homeService: HomeService) {
    // to set the type animation when data load from api
    effect(() => {
      this.slides = this.homeService.homePageHeroSlides();
      this.createTypedInstance();
    });
  }

  createTypedInstance() {
    if (this.slides && this.slides.length) {
      const capitalizedWordsArray = this.slides
        .flatMap((slide) => slide.subtitle?.split(' ')[1]?.split(',').slice(0, 1) || [])
        .map((word) => `${word},`);

      this.typedInstance = new Typed(this.typedElement.nativeElement, {
        ...TYPED_OPTIONS,
        strings: capitalizedWordsArray,
        preStringTyped: (arrayPos) => {
          this.currentWordIndex = arrayPos;
        },
      });
    }
  }

  ngOnDestroy() {
    if (this.typedInstance) {
      this.typedInstance.destroy();
    }
  }
}
