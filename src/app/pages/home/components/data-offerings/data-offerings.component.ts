import { Component } from '@angular/core';
import { HomeService } from '../../../../shared/services/home.service';
import { SafeHtmlPipe } from '../../../../shared/pipes/safeHtmlPipe.pipe';

@Component({
  selector: 'app-data-offerings',
  imports: [SafeHtmlPipe],
  templateUrl: './data-offerings.component.html',
  styleUrl: './data-offerings.component.scss'
})
export class DataOfferingsComponent {

  constructor(
    private homeService: HomeService,
  ){}

  get dataOfferings() {
    return this.homeService.dataOfferings.asReadonly();
  }

}
