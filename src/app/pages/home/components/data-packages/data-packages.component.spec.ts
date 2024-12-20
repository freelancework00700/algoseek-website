import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataPackagesComponent } from './data-packages.component';

describe('DataPackagesComponent', () => {
  let component: DataPackagesComponent;
  let fixture: ComponentFixture<DataPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPackagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
