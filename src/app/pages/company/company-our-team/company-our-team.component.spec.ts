import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOurTeamComponent } from './company-our-team.component';

describe('CompanyOurTeamComponent', () => {
  let component: CompanyOurTeamComponent;
  let fixture: ComponentFixture<CompanyOurTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyOurTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
