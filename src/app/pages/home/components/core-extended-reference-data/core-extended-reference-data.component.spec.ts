import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreExtendedReferenceDataComponent } from './core-extended-reference-data.component';

describe('CoreExtendedReferenceDataComponent', () => {
  let component: CoreExtendedReferenceDataComponent;
  let fixture: ComponentFixture<CoreExtendedReferenceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreExtendedReferenceDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreExtendedReferenceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
