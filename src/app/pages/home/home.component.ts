import {
  HeaderData,
  HomePageStatsNumber,
  HomeAlgoseekConsoleIcon,
  HomeAlgoseekConsoleIconSection,
} from '../../core/interfaces';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HomeService } from '../../shared/services/home.service';
import { ArdaDBComponent } from './components/arda-db/arda-db.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeStatsComponent } from './components/home-stats/home-stats.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { DataPackagesComponent } from './components/data-packages/data-packages.component';
import { TrustedBrandComponent } from './components/trusted-brand/trusted-brand.component';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';
import { DataOfferingsComponent } from './components/data-offerings/data-offerings.component';
import { AlgoseekConsoleComponent } from './components/algoseek-console/algoseek-console.component';
import { DataAndServicesComponent } from './components/data-and-services/data-and-services.component';
import { MarketDataTypesComponent } from './components/market-data-types/market-data-types.component';
import { DataOnboardingServicesComponent } from './components/data-onboarding-services/data-onboarding-services.component';
import { CoreExtendedReferenceDataComponent } from './components/core-extended-reference-data/core-extended-reference-data.component';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  imports: [
    ArdaDBComponent,
    HeaderComponent,
    HomeStatsComponent,
    HeroSliderComponent,
    RealTimeDataComponent,
    TrustedBrandComponent,
    DataPackagesComponent,
    DataOfferingsComponent,
    DataAndServicesComponent,
    MarketDataTypesComponent,
    AlgoseekConsoleComponent,
    DataOnboardingServicesComponent,
    CoreExtendedReferenceDataComponent,
  ],
})
export class HomeComponent {
  _destroy$ = new Subject<void>();

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homePageContentSubscriptions();
  }

  homePageContentSubscriptions() {
    // 1. call getHeaderLinks and set the data when it completes
    this.homeService
      .getHeaderLinks()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.setHeaderLinks(response.data[0]),
        error: (error) => console.error('Error in getHeaderLinks:', error),
      });

    // 2. all getHeroSliderContent and set the data when it completes
    this.homeService
      .getHeroSliderContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.homeService.homePageHeroSlides.set(response.data),
        error: (error) => console.error('Error in getHeroSliderContent:', error),
      });

    // 3. call getHomeStatsNumbers and set the data when it completes
    this.homeService
      .getHomeStatsNumbers()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.setHomeStatsNumbers(response.data),
        error: (error) => console.error('Error in getHomeStatsNumbers:', error),
      });

    // 4. call getUseCasesContent and set the data when it completes
    this.homeService
      .getUseCasesContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.homeService.useCases.set(response.data),
        error: (error) => console.error('Error in getUseCasesContent:', error),
      });

    // 5. call getDataOfferingsContent and set the data when it completes
    this.homeService
      .getDataOfferingsContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.homeService.dataOfferings.set(response.data[0]),
        error: (error) => console.error('Error in getDataOfferingsContent:', error),
      });

    // 6. call getRealTimeDataContent and set the data when it completes
    this.homeService
      .getRealTimeDataContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.homeService.realTimeData.set(response.data),
        error: (error) => console.error('Error in getRealTimeDataContent:', error),
      });

    // 7. call getTrustedPartnersContent and set the data when it completes
    this.homeService
      .getTrustedPartnersContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.homeService.trustedPartners.set(response.data),
        error: (error) => console.error('Error in getTrustedPartnersContent:', error),
      });

    // 8. call getHpDataPackagesContent and set the data when it completes
    this.homeService
      .getHpDataPackagesContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.homeService.hpAlgoseekDataPackages.set(response.data[0]),
        error: (error) => console.error('Error in getHpDataPackagesContent:', error),
      });

    // 9. call getHpDataPackagesItemContent and set the data when it completes
    this.homeService
      .getHpDataPackagesItemContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.homeService.hpAlgoseekDataPackagesItem.set(response.data),
        error: (error) => console.error('Error in getHpDataPackagesItemContent:', error),
      });

    // 10. call getAlgoseekConsoleContent and set the data when it completes
    this.homeService
      .getAlgoseekConsoleContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.homeService.algoseekConsole.set(response.data[0]),
        error: (error) => console.error('Error in getAlgoseekConsoleContent:', error),
      });

    // 11. call getHpAlgoseekConsoleIconsContent and set the data when it completes
    this.homeService
      .getHpAlgoseekConsoleIconsContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.setAlgoSeekConsole(response.data),
        error: (error) => console.error('Error in getAlgoseekConsoleContent:', error),
      });

    // 12. call getDataAndServicesContent and set the data when it completes
    this.homeService
      .getDataAndServicesContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.homeService.dataAndServices.set(response.data[0]),
        error: (error) => console.error('Error in getAlgoseekConsoleContent:', error),
      });

    // 13. call getDataAndServicesCardsContent and set the data when it completes
    this.homeService
      .getDataAndServicesCardsContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.homeService.dataAndServicesCards.set(response.data);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  // function to set home stats numbers
  private setHomeStatsNumbers(data: HomePageStatsNumber[]) {
    this.homeService.statsNumbers.set(
      data.map((item) => {
        let value, suffix;
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
          suffix: suffix,
          number: item.number,
          value: String(value),
          description: String(item.description),
        };
      }),
    );
  }

  // function to set header links
  private setHeaderLinks(data: HeaderData) {
    const visibleLinks = data.links.filter((link) => link.header_links_id.visible !== false);
    this.homeService.headerLinks.set(
      visibleLinks.map((link) => link.header_links_id).sort((a, b) => a.order - b.order),
    );
  }

  // function to set set AlgoSeek console data
  private setAlgoSeekConsole(icons: HomeAlgoseekConsoleIcon[]) {
    const totalIcons = icons.length;
    const chunkSize = Math.ceil(totalIcons / 3);

    const top = icons.slice(0, chunkSize);
    const bottom = icons.slice(chunkSize * 2);
    const middle = icons.slice(chunkSize, chunkSize * 2);

    const data: HomeAlgoseekConsoleIconSection = { top, middle, bottom };
    this.homeService.hpAlgoseekConsoleIcons.set(data);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
