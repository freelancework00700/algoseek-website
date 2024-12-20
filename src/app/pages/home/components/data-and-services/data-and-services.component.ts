import { Component } from '@angular/core';
import { environment } from '../../../../../../environment';
import { HomeService } from '../../../../shared/services/home.service';

@Component({
  selector: 'app-data-and-services',
  styleUrl: './data-and-services.component.scss',
  templateUrl: './data-and-services.component.html',
})
export class DataAndServicesComponent {
  baseUrl: string = environment.apiUrl;

  constructor(private homeService: HomeService) {}

  get useCases() {
    return this.homeService.useCases.asReadonly();
  }
}
