import Typed from 'typed.js';
import { TYPED_OPTIONS } from '../../../../core/constants';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  styleUrl: './hero-slider.component.scss',
  templateUrl: './hero-slider.component.html',
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  currentWordIndex: number = 0;
  typedInstance: Typed | null = null;
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  slides = [
    {
      title: 'Trading is exciting, data is grinding.',
      subtitle: 'Financial data, technology and services.',
    },
    {
      title: 'Math is neat, data is messy.',
      subtitle: 'Financial data, technology and services.',
    },
    {
      title: 'Coding is logical, data is empirical.',
      subtitle: 'Financial data, technology and services.',
    },
  ];

  ngOnInit() {
    this.createTypedInstance();
  }

  createTypedInstance() {
    this.typedInstance = new Typed(this.typedElement.nativeElement, {
      ...TYPED_OPTIONS,
      strings: ['Trading,', 'Math,', 'Coding,'],
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
