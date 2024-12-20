import { Component } from '@angular/core';
import { HomeService } from '../../../../shared/services/home.service';

@Component({
  selector: 'app-real-time-data',
  styleUrl: './real-time-data.component.scss',
  templateUrl: './real-time-data.component.html',
})
export class RealTimeDataComponent {
  constructor(private homeService: HomeService) {}

  get realTimeData() {
    return this.homeService.realTimeData.asReadonly();
  }
}
