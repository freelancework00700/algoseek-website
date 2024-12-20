import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeStatsComponent } from './components/home-stats/home-stats.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { TrustedBrandComponent } from './components/trusted-brand/trusted-brand.component';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';
import { DataAndServicesComponent } from './components/data-and-services/data-and-services.component';
import { DataOfferingsComponent } from './components/data-offerings/data-offerings.component';
import { MarketDataTypesComponent } from './components/market-data-types/market-data-types.component';
import { CoreExtendedReferenceDataComponent } from './components/core-extended-reference-data/core-extended-reference-data.component';
import { DataPackagesComponent } from './components/data-packages/data-packages.component';
import { ArdaDBComponent } from './components/arda-db/arda-db.component';
import { HomeService } from '../../shared/services/home.service';
import { Subject, takeUntil } from 'rxjs';
import { HeaderData, HomePageStatsNumber } from '../../core/interfaces';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  imports: [
    HeaderComponent,
    HomeStatsComponent,
    HeroSliderComponent,
    RealTimeDataComponent,
    TrustedBrandComponent,
    DataAndServicesComponent,
    DataOfferingsComponent,
    MarketDataTypesComponent,
    CoreExtendedReferenceDataComponent,
    DataPackagesComponent,
    ArdaDBComponent,
  ],
})
export class HomeComponent {
  _destroy$ = new Subject<void>();

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homePageContentSubscriptions();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  homePageContentSubscriptions() {
    this.homeService
      .getHeaderLinks()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          const data: HeaderData = response.data[0];
          const visibleLinks = data.links.filter((link) => link.header_links_id.visible !== false);
          this.homeService.headerLinks.set(
            visibleLinks.map((link) => link.header_links_id).sort((a, b) => a.order - b.order),
          );
        },
        error: (error) => {
          console.error(error);
        },
      });

    this.homeService
      .getHeroSliderContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.homeService.homePageHeroSlides.set(response.data);
        },
        error: (error) => {
          console.error(error);
        },
      });

    this.homeService
      .getHomeStatsNumbers()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          let value, suffix;
          this.homeService.statsNumbers.set(
            response.data.map((item: HomePageStatsNumber) => {
              if (item.number.includes('+')) {
                [value, ...suffix] = item.number.split('+');
                value = `${value.trim()}+`;
                suffix = suffix.join('+').trim();
              } else {
                [value, ...suffix] = item.number.split(' ');
                value = value.trim();
                suffix = suffix.join(' ').trim();
              }
              return {
                value: value,
                suffix: suffix,
                description: item.description,
              };
            }),
          );
        },
        error: (error) => {
          console.error(error);
        },
      });

    this.homeService
      .getRealTimeDataContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.homeService.realTimeData.set(response.data);
        },
        error: (error) => {
          console.error(error);
        },
      });

    this.homeService
      .getTrustedPartnersContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.homeService.trustedPartners.set(response.data);
        },
        error: (error) => {
          console.error(error);
        },
      });

    this.homeService
      .getUseCasesContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.homeService.useCases.set(response.data);
        },
        error: (error) => {
          console.error(error);
        },
      });

    this.homeService
      .getDataOfferingsContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.homeService.dataOfferings.set(response.data[0]);
        },
        error: (error) => {
          console.error(error);
        },
      });

    this.homeService
      .getHpDataPackagesContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.homeService.hpAlgoseekDataPackages.set(response.data[0]);
        },
        error: (error) => {
          console.error(error);
        },
      });

    this.homeService
      .getHpDataPackagesItemContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.homeService.hpAlgoseekDataPackagesItem.set(response.data);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
