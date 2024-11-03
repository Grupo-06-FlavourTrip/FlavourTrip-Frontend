import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPaymentComponent } from './tour-payment.component';

describe('TourPaymentComponent', () => {
  let component: TourPaymentComponent;
  let fixture: ComponentFixture<TourPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
