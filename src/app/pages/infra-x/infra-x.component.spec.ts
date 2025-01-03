import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraXComponent } from './infra-x.component';

describe('InfraXComponent', () => {
  let component: InfraXComponent;
  let fixture: ComponentFixture<InfraXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfraXComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
