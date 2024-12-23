import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.component.scss',
  templateUrl: './footer.component.html',
  imports: [CommonModule]
})
export class FooterComponent {
  
  dropdowns: { [key: string]: boolean } = {
    comingSoon: false,
    whatsNew: false,
    legal: false,
    resources: false,
  };

  constructor(private homeService: HomeService) {}

  get footerLinks() {
    return this.homeService.footerLinks.asReadonly();
  }

  toggleDropdown(section: string) {

    if (this.dropdowns[section]) {
      this.dropdowns[section] = false;
    } else {
      for (let key in this.dropdowns) {
        this.dropdowns[key] = false;
      }
      this.dropdowns[section] = true;
    }
    
  }

}
