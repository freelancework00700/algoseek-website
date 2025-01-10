import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderDropdownCompanyComponent } from './header-dropdown-company.component';

describe('HeaderDropdownCompanyComponent', () => {
  let component: HeaderDropdownCompanyComponent;
  let fixture: ComponentFixture<HeaderDropdownCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDropdownCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderDropdownCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
