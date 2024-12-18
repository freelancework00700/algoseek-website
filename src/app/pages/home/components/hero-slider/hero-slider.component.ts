import Swiper from 'swiper';
import Typed from 'typed.js';
import { TYPED_OPTIONS } from '../../../../core/constants';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero-slider',
  styleUrl: './hero-slider.component.scss',
  templateUrl: './hero-slider.component.html',
})
export class HeroSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  swiper!: Swiper;
  typedInstance: Typed | null = null;
  @ViewChildren('typedElement') typedElements!: QueryList<ElementRef>;

  // add this when you used the 3rd type animation
  // heading: 'Enjoy coding, <br />Leave data to <span class="highlight">algoseek.</span>',

  slides = [
    {
      title: 'Trading is exciting, data is grinding.',
      heading: 'Enjoy trading, <br />Leave data to ',
      subtitle: 'Financial data, technology and services.',
    },
    {
      title: 'Math is neat, data is messy.',
      heading: 'Enjoy math, <br />Leave data to ',
      subtitle: 'Financial data, technology and services.',
    },
    {
      title: 'Coding is logical, data is empirical.',
      heading: 'Enjoy coding, <br />Leave data to ',
      subtitle: 'Financial data, technology and services.',
    },
  ];

  ngOnInit() {
    this.swiper = new Swiper('.swiper', {});
  }

  ngAfterViewInit() {
    this.typedElements.forEach((element, index) => {
      new Typed(element.nativeElement, {
        ...TYPED_OPTIONS,
        // strings: [this.slides[index].heading], // for 3rd type animation.
        strings: ['algoseek.'], // for second type animation.
      });
    });
  }

  ngOnDestroy() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
    if (this.typedInstance) {
      this.typedInstance.destroy();
    }
  }
}
