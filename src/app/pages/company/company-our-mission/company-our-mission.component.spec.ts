import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOurMissionComponent } from './company-our-mission.component';

describe('CompanyOurMissionComponent', () => {
  let component: CompanyOurMissionComponent;
  let fixture: ComponentFixture<CompanyOurMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyOurMissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyOurMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
