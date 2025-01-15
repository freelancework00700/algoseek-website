import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAboutUsComponent } from './company-about-us.component';

describe('CompanyAboutUsComponent', () => {
  let component: CompanyAboutUsComponent;
  let fixture: ComponentFixture<CompanyAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
