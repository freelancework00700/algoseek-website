import { Component, Sanitizer } from '@angular/core';
import { CompanyService } from '../../../shared/services/company.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'company-about-us',
  imports: [CommonModule],
  templateUrl: './company-about-us.component.html',
  styleUrl: './company-about-us.component.scss'
})
export class CompanyAboutUsComponent {
  constructor(private companyService : CompanyService,
  ){}
  get aboutUsHeroContent() {
    return this.companyService.aboutUsHeroContent.asReadonly();
  }
  get aboutUsContent() {
    return this.companyService.aboutUsContent.asReadonly();
  }

  get aboutUsTransformContent() {
    return this.companyService.aboutUsTransformContent.asReadonly();
  }

  get aboutUsYearsContent() {
    return this.companyService.aboutUsYearsContent.asReadonly();
  }


}
