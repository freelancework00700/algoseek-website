import { Component } from '@angular/core';
import { HomeService } from '../../shared/services/home.service';
import { HeaderDropdownDataComponent } from './header-dropdown-data/header-dropdown-data.component';
import { HeaderDropdownCompanyComponent } from './header-dropdown-company/header-dropdown-company.component';
import { HeaderDropdownContactComponent } from './header-dropdown-contact/header-dropdown-contact.component';
import { HeaderDropdownServicesComponent } from './header-dropdown-services/header-dropdown-services.component';

@Component({
  imports: [
    HeaderDropdownDataComponent,
    HeaderDropdownCompanyComponent,
    HeaderDropdownContactComponent,
    HeaderDropdownServicesComponent,
  ],
  selector: 'app-header-dropdown-container',
  styleUrl: './header-dropdown-container.component.scss',
  templateUrl: './header-dropdown-container.component.html',
})
export class HeaderDropdownContainerComponent {
  constructor(private homeService: HomeService) {}

  get activeMenuLabel() {
    return this.homeService.activeMenuLabel.asReadonly();
  }
}
