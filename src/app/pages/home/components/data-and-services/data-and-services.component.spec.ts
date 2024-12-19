import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndServicesComponent } from './data-and-services.component';

describe('DataAndServicesComponent', () => {
  let component: DataAndServicesComponent;
  let fixture: ComponentFixture<DataAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAndServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
