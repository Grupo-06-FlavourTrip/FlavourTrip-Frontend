import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanOptionsComponent } from './plan-options.component';

describe('PlanOptionsComponent', () => {
  let component: PlanOptionsComponent;
  let fixture: ComponentFixture<PlanOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
