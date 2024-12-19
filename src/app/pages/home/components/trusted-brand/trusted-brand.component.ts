import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Component, OnInit } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-trusted-brand',
  styleUrl: './trusted-brand.component.scss',
  templateUrl: './trusted-brand.component.html',
})
export class TrustedBrandComponent implements OnInit {
  swiper!: Swiper;

  trustedBrands = [
    { image: '../../../../../assets/images/trusted-brand/Trusted-brand1.png' },
    { image: '../../../../../assets/images/trusted-brand/Trusted-brand2.png' },
    { image: '../../../../../assets/images/trusted-brand/Trusted-brand3.png' },
    { image: '../../../../../assets/images/trusted-brand/Trusted-brand4.png' },
    { image: '../../../../../assets/images/trusted-brand/Trusted-brand5.png' },
    { image: '../../../../../assets/images/trusted-brand/Trusted-brand6.png' },
    { image: '../../../../../assets/images/trusted-brand/Trusted-brand7.png' },
    { image: '../../../../../assets/images/trusted-brand/Trusted-brand1.png' },
    { image: '../../../../../assets/images/trusted-brand/Trusted-brand2.png' },
    { image: '../../../../../assets/images/trusted-brand/Trusted-brand3.png' },
  ];

  swiperOptions: SwiperOptions = {
    mousewheel: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1400: {
        slidesPerView: 7,
      },
      1200: {
        slidesPerView: 7,
      },
      1024: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 5,
      },
      320: {
        slidesPerView: 3,
      },
    },
  };

  ngOnInit() {
    this.swiper = new Swiper('.trusted-brand-swiper', {
      ...this.swiperOptions,
    });
  }
}
