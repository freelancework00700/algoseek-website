import { Component } from '@angular/core';
import { HomeService } from '../../../../shared/services/home.service';

@Component({
  selector: 'app-home-stats',
  styleUrl: './home-stats.component.scss',
  templateUrl: './home-stats.component.html',
})
export class HomeStatsComponent {
  constructor(private homeService: HomeService) {}

  get statsNumbers() {
    return this.homeService.statsNumbers.asReadonly();
  }
}
