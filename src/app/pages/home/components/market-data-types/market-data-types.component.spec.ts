import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketDataTypesComponent } from './market-data-types.component';

describe('MarketDataTypesComponent', () => {
  let component: MarketDataTypesComponent;
  let fixture: ComponentFixture<MarketDataTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketDataTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarketDataTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
