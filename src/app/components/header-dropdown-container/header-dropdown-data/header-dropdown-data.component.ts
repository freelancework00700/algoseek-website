import { Component } from '@angular/core';
import { HomeService } from '../../../shared/services/home.service';

@Component({
  selector: 'app-header-dropdown-data',
  templateUrl: './header-dropdown-data.component.html',
  styleUrl: './header-dropdown-data.component.scss',
})
export class HeaderDropdownDataComponent {
  constructor(
    private homeService : HomeService
  ){}
  
  get HeaderDropDownLinks() {
    return this.homeService.HeaderDropDownLinks.asReadonly();
  }
 
  realtimeData: string[] = ['For Business', 'For Academic'];

  individualData: string[] = ['Equities', 'Options', 'Futures', 'Future Options', 'OTC Data'];

  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
