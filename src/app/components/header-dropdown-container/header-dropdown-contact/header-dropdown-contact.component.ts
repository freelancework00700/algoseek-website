import { Component } from '@angular/core';
import { HomeService } from '../../../shared/services/home.service';

@Component({
  selector: 'app-header-dropdown-contact',
  templateUrl: './header-dropdown-contact.component.html',
  styleUrl: './header-dropdown-contact.component.scss',
})
export class HeaderDropdownContactComponent {
  constructor(private homeService : HomeService){}
  get headerContacts() {
    return this.homeService.headerContacts.asReadonly();
  }
}
