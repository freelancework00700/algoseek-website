import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderDropdownContainerComponent } from './header-dropdown-container.component';

describe('HeaderDropdownContainerComponent', () => {
  let component: HeaderDropdownContainerComponent;
  let fixture: ComponentFixture<HeaderDropdownContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDropdownContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderDropdownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
