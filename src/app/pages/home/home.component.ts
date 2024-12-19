import { Component } from '@angular/core';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeStatsComponent } from './components/home-stats/home-stats.component';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';
import { DataAndServicesComponent } from './components/data-and-services/data-and-services.component';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  imports: [HeroSliderComponent, HeaderComponent, HomeStatsComponent, RealTimeDataComponent, DataAndServicesComponent],
})
export class HomeComponent {}
