import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  styleUrl: './footer.component.scss',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  dropdowns: { [key: string]: boolean } = {
    legal: false,
    whatsNew: false,
    resources: false,
    comingSoon: false,
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
