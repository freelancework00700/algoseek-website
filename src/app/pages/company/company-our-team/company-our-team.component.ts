import { Component } from '@angular/core';
import { CompanyService } from '../../../shared/services/company.service';
import { AlgoseekApiService } from '../../../shared/services/algoseek-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'company-our-team',
  imports: [CommonModule],
  templateUrl: './company-our-team.component.html',
  styleUrl: './company-our-team.component.scss'
})
export class CompanyOurTeamComponent {
  baseUrl: string;
  constructor(
    private companyService: CompanyService,
    private apiService : AlgoseekApiService
  ){
    this.baseUrl = this.apiService._BASE_URL;
  }

  get ourTeamHeroContent(){
    return this.companyService.ourTeamHeroContent.asReadonly();
  }
  get ourTeamMembersContent(){
    return this.companyService.ourTeamMembersContent.asReadonly();
  }
  get ourMembersContent(){
    return this.companyService.ourMembersContent.asReadonly();
  }
}
