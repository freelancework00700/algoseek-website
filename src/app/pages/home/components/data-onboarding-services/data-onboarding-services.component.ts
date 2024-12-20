import { Component } from '@angular/core';
import { environment } from '../../../../../../environment';
import { HomeService } from '../../../../shared/services/home.service';

@Component({
  selector: 'app-data-onboarding-services',
  imports: [],
  templateUrl: './data-onboarding-services.component.html',
  styleUrl: './data-onboarding-services.component.scss'
})
export class DataOnboardingServicesComponent {

  baseUrl: string = environment.apiUrl;

  constructor(
    private homeService: HomeService,
  ){}

  get dataAndServices() {
    return this.homeService.dataAndServices.asReadonly();
  }

  get dataAndServicesCards() {
    return this.homeService.dataAndServicesCards.asReadonly();
  }


}
