import { Component } from '@angular/core';
import { HomeService } from '../../../shared/services/home.service';

@Component({
  selector: 'app-header-dropdown-services',
  templateUrl: './header-dropdown-services.component.html',
  styleUrl: './header-dropdown-services.component.scss',
})
export class HeaderDropdownServicesComponent {
  constructor(private homeservice : HomeService ){}
  get headerServiceLinks(){
    return this.homeservice.headerServicesLinks.asReadonly();
  }
  dataEngineeringServices: string[] = [
    'Data Onboarding',
    'Data Customization',
    'Data Integration',
    'On-Demand Delivery',
  ];

  softwareServices: string[] = ['Data Pipeline', 'Ticker Plant'];

  dataSolutions: string[] = ['InfraConnect: Co-Lo & Cloud Integration', 'Database Solution'];

  dataSuppliers: string[] = ['InfraX Solution Suite', 'ServComplete Marketplace & Delivery Service Package'];
}
