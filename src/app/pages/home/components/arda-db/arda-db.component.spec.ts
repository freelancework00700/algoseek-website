import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdaDBComponent } from './arda-db.component';

describe('ArdaDBComponent', () => {
  let component: ArdaDBComponent;
  let fixture: ComponentFixture<ArdaDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArdaDBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArdaDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
