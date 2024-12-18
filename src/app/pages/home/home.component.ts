import { Component } from '@angular/core';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeStatsComponent } from './components/home-stats/home-stats.component';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  imports: [HeroSliderComponent, HeaderComponent, HomeStatsComponent],
})
export class HomeComponent {}
