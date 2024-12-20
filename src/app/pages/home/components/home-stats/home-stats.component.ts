import { Component } from '@angular/core';
import { HomeService } from '../../../../shared/services/home.service';

@Component({
  selector: 'app-home-stats',
  imports: [],
  templateUrl: './home-stats.component.html',
  styleUrl: './home-stats.component.scss'
})
export class HomeStatsComponent {

  constructor(
    private homeService: HomeService,
  ){}

  get statsNumbers() {
    return this.homeService.statsNumbers.asReadonly();
  }

}
