import { Component } from '@angular/core';

@Component({
  selector: 'app-header-dropdown-company',
  templateUrl: './header-dropdown-company.component.html',
  styleUrl: './header-dropdown-company.component.scss',
})
export class HeaderDropdownCompanyComponent {
  menuItems = [
    { title: 'Our Vision', heading: 'Five Star Data Nanny', image: 'assets/images/our-vision.png' },
    { title: 'Our Mission', heading: 'Leave Data to algoseek', image: 'assets/images/our-mission.png' },
    { title: 'Meet Our Team', heading: 'Meet Our Team', image: 'assets/images/meet-the-team.png' },
    { title: 'About Us', heading: 'From quant to Data Infrastructure Provider', image: 'assets/images/about-us.png' },
  ];

  selectedMenuIndex = 0;
  sectionData = this.menuItems[0];

  onMenuClick(index: number): void {
    this.selectedMenuIndex = index;
    this.sectionData = this.menuItems[index];
  }
}
