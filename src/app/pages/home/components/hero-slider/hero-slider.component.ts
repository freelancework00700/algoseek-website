import Typed from 'typed.js';
import { TYPED_OPTIONS } from '../../../../core/constants';
import { Component, effect, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HomeService } from '../../../../shared/services/home.service';
import { HomePageHeroSlider } from '../../../../core/interfaces';

@Component({
  selector: 'app-hero-slider',
  styleUrl: './hero-slider.component.scss',
  templateUrl: './hero-slider.component.html',
})
export class HeroSliderComponent implements OnDestroy {
  currentWordIndex: number = 0;
  typedInstance: Typed | null = null;
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  slides: HomePageHeroSlider[] = [];

  constructor(private homeService: HomeService) {
    effect(() => {
      this.slides = this.homeService.homePageHeroSlides();
      if (this.slides && this.slides.length) {
        this.createTypedInstance();
      }
    });
  }

  createTypedInstance() {
    const wordsArray = this.slides.map((slide) => slide.subtitle.split(' ')[1].split(',')[0]);

    const capitalizedWordsArray = wordsArray.map((word) => `${word.charAt(0).toUpperCase() + word.slice(1)},`);

    this.typedInstance = new Typed(this.typedElement.nativeElement, {
      ...TYPED_OPTIONS,
      strings: capitalizedWordsArray,
      preStringTyped: (arrayPos) => {
        this.currentWordIndex = arrayPos;
      },
    });
  }

  ngOnDestroy() {
    if (this.typedInstance) {
      this.typedInstance.destroy();
    }
  }
}
