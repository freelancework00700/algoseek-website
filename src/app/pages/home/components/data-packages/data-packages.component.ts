import { Component } from '@angular/core';
import { environment } from '../../../../../../environment';
import { HomeService } from '../../../../shared/services/home.service';

@Component({
  selector: 'app-data-packages',
  styleUrl: './data-packages.component.scss',
  templateUrl: './data-packages.component.html',
})
export class DataPackagesComponent {
  baseUrl: string = environment.apiUrl;

  constructor(private homeService: HomeService) {}

  get hpAlgoseekDataPackages() {
    return this.homeService.hpAlgoseekDataPackages.asReadonly();
  }

  get hpAlgoseekDataPackagesItem() {
    return this.homeService.hpAlgoseekDataPackagesItem.asReadonly();
  }
}
