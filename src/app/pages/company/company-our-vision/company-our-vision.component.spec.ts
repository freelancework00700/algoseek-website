import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOurVisionComponent } from './company-our-vision.component';

describe('CompanyOurVisionComponent', () => {
  let component: CompanyOurVisionComponent;
  let fixture: ComponentFixture<CompanyOurVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyOurVisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyOurVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
