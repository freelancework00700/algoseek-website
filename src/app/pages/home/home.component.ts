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
export class HomeComponent {}
