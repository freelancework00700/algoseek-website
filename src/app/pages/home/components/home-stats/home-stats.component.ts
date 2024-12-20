import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeService } from '../../../../shared/services/home.service';

@Component({
  selector: 'app-home-stats',
  styleUrl: './home-stats.component.scss',
  templateUrl: './home-stats.component.html',
})
export class HomeStatsComponent {
  @ViewChild('wrapper') wrapper!: ElementRef;

  getElement() {
    return this.wrapper.nativeElement;
  }

  constructor(private homeService: HomeService) {}

  get statsNumbers() {
    return this.homeService.statsNumbers.asReadonly();
  }
}
