import { Component } from '@angular/core';
import { environment } from '../../../../../../environment';
import { HomeService } from '../../../../shared/services/home.service';

@Component({
  selector: 'app-data-and-services',
  imports: [],
  templateUrl: './data-and-services.component.html',
  styleUrl: './data-and-services.component.scss'
})
export class DataAndServicesComponent {

  baseUrl: string = environment.apiUrl;

  constructor(
    private homeService: HomeService,
  ){}

  get useCases() {
    return this.homeService.useCases.asReadonly();
  }

}
