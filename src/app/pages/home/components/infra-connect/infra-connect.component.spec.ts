import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfraConnectComponent } from './infra-connect.component';

describe('InfraConnectComponent', () => {
  let component: InfraConnectComponent;
  let fixture: ComponentFixture<InfraConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfraConnectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfraConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
