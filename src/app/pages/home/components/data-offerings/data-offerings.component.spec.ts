import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOfferingsComponent } from './data-offerings.component';

describe('DataOfferingsComponent', () => {
  let component: DataOfferingsComponent;
  let fixture: ComponentFixture<DataOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataOfferingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
