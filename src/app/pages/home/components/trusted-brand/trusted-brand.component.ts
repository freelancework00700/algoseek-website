import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Component, OnInit } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import { HomeService } from '../../../../shared/services/home.service';
import { environment } from '../../../../../../environment';

@Component({
  selector: 'app-trusted-brand',
  styleUrl: './trusted-brand.component.scss',
  templateUrl: './trusted-brand.component.html',
})
export class TrustedBrandComponent implements OnInit {

  swiper!: Swiper;
  baseUrl: string = environment.apiUrl;

  constructor(
    private homeService: HomeService,
  ){}

  get trustedPartners() {
    return this.homeService.trustedPartners.asReadonly();
  }

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
