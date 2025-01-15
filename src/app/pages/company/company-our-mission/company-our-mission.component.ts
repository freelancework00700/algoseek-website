import { Component } from '@angular/core';
import { CompanyService } from '../../../shared/services/company.service';

@Component({
  selector: 'company-our-mission',
  imports: [],
  templateUrl: './company-our-mission.component.html',
  styleUrl: './company-our-mission.component.scss'
})
export class CompanyOurMissionComponent {

    constructor(
      private companyService : CompanyService
    ){}

    
  get ourMissionHeroContent(){
    return this.companyService.ourMissionHeroContent.asReadonly();
  }

  get ourMissionStatementContent(){
    return this.companyService.ourMissionStatementContent.asReadonly();
  }
  get ourMissionDataChallengesContent(){
    return this.companyService.ourMissionDataChallengesContent.asReadonly();
  }
}
