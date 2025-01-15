import { Component } from '@angular/core';
import { HomeService } from '../../../shared/services/home.service';
import { MenuCompanyImagesEnum, MenuCompanyTitlesEnum } from '../../../core/enums';
@Component({
  selector: 'app-header-dropdown-company',
  templateUrl: './header-dropdown-company.component.html',
  styleUrl: './header-dropdown-company.component.scss',
})
export class HeaderDropdownCompanyComponent {
  constructor(private homeService: HomeService) {}
  get headerCompanyLinks() {
    return this.homeService.headerCompanyLinks.asReadonly();
  }
  menuItems = [
    {
      title: MenuCompanyImagesEnum.OurVision,
      heading: MenuCompanyTitlesEnum.OurVision,
      image: 'assets/images/our-vision.png',
    },
    {
      title: MenuCompanyImagesEnum.OurMission,
      heading: MenuCompanyTitlesEnum.OurMission,
      image: 'assets/images/our-mission.png',
    },
    {
      title: MenuCompanyImagesEnum.MeetTheTeam,
      heading: MenuCompanyTitlesEnum.MeetTheTeam,
      image: 'assets/images/meet-the-team.png',
    },
    {
      title: MenuCompanyImagesEnum.AboutUs,
      heading: MenuCompanyTitlesEnum.AboutUs,
      image: 'assets/images/about-us.png',
    },
  ];

  selectedMenuIndex = 0;
  sectionData = this.menuItems[0];

  onMenuClick(index: number): void {
    this.selectedMenuIndex = index;
    this.sectionData = this.menuItems[index];
  }
}
