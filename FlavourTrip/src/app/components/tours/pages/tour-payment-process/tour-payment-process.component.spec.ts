import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPaymentProcessComponent } from './tour-payment-process.component';

describe('TourPaymentProcessComponent', () => {
  let component: TourPaymentProcessComponent;
  let fixture: ComponentFixture<TourPaymentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPaymentProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPaymentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
