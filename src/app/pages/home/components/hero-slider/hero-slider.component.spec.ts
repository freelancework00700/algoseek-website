import { HeroSliderComponent } from './hero-slider.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('HeroSliderComponent', () => {
  let component: HeroSliderComponent;
  let fixture: ComponentFixture<HeroSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
