import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoseekConsoleComponent } from './algoseek-console.component';

describe('AlgoseekConsoleComponent', () => {
  let component: AlgoseekConsoleComponent;
  let fixture: ComponentFixture<AlgoseekConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoseekConsoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoseekConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
