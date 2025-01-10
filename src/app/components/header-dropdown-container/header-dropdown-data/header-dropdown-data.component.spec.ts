import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderDropdownDataComponent } from './header-dropdown-data.component';

describe('HeaderDropdownDataComponent', () => {
  let component: HeaderDropdownDataComponent;
  let fixture: ComponentFixture<HeaderDropdownDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDropdownDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderDropdownDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
