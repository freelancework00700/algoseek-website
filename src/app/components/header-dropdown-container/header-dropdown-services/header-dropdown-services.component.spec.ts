import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderDropdownServicesComponent } from './header-dropdown-services.component';

describe('HeaderDropdownServicesComponent', () => {
  let component: HeaderDropdownServicesComponent;
  let fixture: ComponentFixture<HeaderDropdownServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDropdownServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderDropdownServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
