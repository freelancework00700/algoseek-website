import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderDropdownContactComponent } from './header-dropdown-contact.component';

describe('HeaderDropdownContactComponent', () => {
  let component: HeaderDropdownContactComponent;
  let fixture: ComponentFixture<HeaderDropdownContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDropdownContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderDropdownContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
