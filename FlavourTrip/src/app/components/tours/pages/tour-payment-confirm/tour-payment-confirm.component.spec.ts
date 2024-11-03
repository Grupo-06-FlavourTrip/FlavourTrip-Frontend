import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPaymentConfirmComponent } from './tour-payment-confirm.component';

describe('TourPaymentConfirmComponent', () => {
  let component: TourPaymentConfirmComponent;
  let fixture: ComponentFixture<TourPaymentConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPaymentConfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPaymentConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
