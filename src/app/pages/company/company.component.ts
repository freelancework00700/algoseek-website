import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderFooterService } from '../../shared/services/header-footer.service';
import { MatTabsModule } from '@angular/material/tabs';
import { CompanyService } from '../../shared/services/company.service';
import { CompanyOurVisionComponent } from './company-our-vision/company-our-vision.component';
import { Subject, takeUntil } from 'rxjs';
import { CompanyOurMissionComponent } from './company-our-mission/company-our-mission.component';
import { CompanyOurTeamComponent } from './company-our-team/company-our-team.component';
import { CompanyAboutUsComponent } from './company-about-us/company-about-us.component';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-company',
  imports: [
    HeaderComponent,
    FooterComponent,
    MatTabsModule,
    CompanyOurVisionComponent,
    CompanyOurMissionComponent,
    CompanyOurTeamComponent,
    CompanyAboutUsComponent,
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent implements OnInit, OnDestroy {
  constructor(
    private headerFooterService: HeaderFooterService,
    private companyService: CompanyService,
    private homeService: HomeService,
  ) {}
  _destroy$ = new Subject<void>();
  ngOnInit() {
    this.headerFooterService.initialize();
    this.companyPageContentSubscriptions();
  }
  get activeMenuLabel() {
    return this.homeService.activeMenuLabel.asReadonly();
  }
  companyPageContentSubscriptions() {
    //1. call getOurVisionHeroContent and set the data
    this.companyService
      .getOurVisionHeroContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.companyService.ourVisionHeroContent.set(response.data[0]);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    //2.call getOurVisionDialogueContent and set the data
    this.companyService
      .getOurVisionDialogueContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          const sortedData = this.sortData(response.data, 'order');
          this.companyService.ourVisionDialogueContent.set(sortedData);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    //3. call getOurMissionHeroContent and set the data
    this.companyService
      .getOurMissionHeroContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.companyService.ourMissionHeroContent.set(response.data[0]);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    //4. call getOurMissionStatementContent and set the data
    this.companyService
      .getOurMissionStatementContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          const sortedData = this.sortData(response.data, 'order');
          this.companyService.ourMissionStatementContent.set(sortedData);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    //5. call getOurMissionStatementContent and set the data
    this.companyService
      .getOurMissionDataChallengesContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.companyService.ourMissionDataChallengesContent.set(response.data[0]);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    //6. call getOurTeamHeroContent and set the data
    this.companyService
      .getOurTeamHeroContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.companyService.ourTeamHeroContent.set(response.data[0]);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    // 7. call getOurTeamMembersContent and set the data
    this.companyService
      .getOurTeamMembersContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.companyService.ourTeamMembersContent.set(response.data[0]);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    // 8. call getOurMemberContent and set the data
    this.companyService
      .getOurMemberContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.companyService.ourMembersContent.set(response.data);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    //9 . call getAboutUsHeroContent and set the data
    this.companyService
      .getAboutUsHeroContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.companyService.aboutUsHeroContent.set(response.data[0]);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    //10 . call getAboutUsContent and set the data
    this.companyService
      .getAboutUsContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.companyService.aboutUsContent.set(response.data[0]);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    //11. call getAboutUsTransformContent and set the data
    this.companyService
      .getAboutUsTransformContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.companyService.aboutUsTransformContent.set(response.data[0]);
        },
        error: (error) => console.error('error fetching data:', error),
      });

    //12. call getAboutUsYearsContent and set the data
    this.companyService
      .getAboutUsYearsContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.companyService.aboutUsYearsContent.set(response.data);
        },
        error: (error) => console.error('error fetching data:', error),
      });
  }

  //common function to sort data
  private sortData<T>(data: T[], sortKey: keyof T): T[] {
    return data.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });
  }

  ngOnDestroy() {
    this.headerFooterService.destroy();
    this._destroy$.next();
    this._destroy$.complete();
  }
}
