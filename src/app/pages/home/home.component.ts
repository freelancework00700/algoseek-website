import { Component } from '@angular/core';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  imports: [HeroSliderComponent],
})
export class HomeComponent {}
