import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataOnboardingServicesComponent } from './data-onboarding-services.component';

describe('DataOnboardingServicesComponent', () => {
  let component: DataOnboardingServicesComponent;
  let fixture: ComponentFixture<DataOnboardingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataOnboardingServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataOnboardingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
