import { Component } from '@angular/core';
import { HomeService } from '../../../../shared/services/home.service';
import { SafeHtmlPipe } from '../../../../shared/pipes/safeHtmlPipe.pipe';

@Component({
  imports: [SafeHtmlPipe],
  selector: 'app-data-offerings',
  styleUrl: './data-offerings.component.scss',
  templateUrl: './data-offerings.component.html',
})
export class DataOfferingsComponent {
  constructor(private homeService: HomeService) {}

  get dataOfferings() {
    return this.homeService.dataOfferings.asReadonly();
  }
}
