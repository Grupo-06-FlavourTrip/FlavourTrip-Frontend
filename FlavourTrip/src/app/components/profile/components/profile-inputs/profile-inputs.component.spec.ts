import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInputsComponent } from './profile-inputs.component';

describe('ProfileInputsComponent', () => {
  let component: ProfileInputsComponent;
  let fixture: ComponentFixture<ProfileInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
