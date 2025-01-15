import { Component } from '@angular/core';
import { CompanyService } from '../../../shared/services/company.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'company-our-vision',
  imports: [CommonModule],
  templateUrl: './company-our-vision.component.html',
  styleUrl: './company-our-vision.component.scss'
})
export class CompanyOurVisionComponent {
  constructor(
    private companyService : CompanyService
  ){}

  get ourVisionHeroContent(){
    return this.companyService.ourVisionHeroContent.asReadonly();
  }
  get ourVisionDialogueContent(){
    return this.companyService.ourVisionDialogueContent.asReadonly();
  }
}
