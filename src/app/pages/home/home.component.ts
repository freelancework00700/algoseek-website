import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeStatsComponent } from './components/home-stats/home-stats.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { TrustedBrandComponent } from './components/trusted-brand/trusted-brand.component';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';
import { DataAndServicesComponent } from './components/data-and-services/data-and-services.component';

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
  ],
})
export class HomeComponent {}
