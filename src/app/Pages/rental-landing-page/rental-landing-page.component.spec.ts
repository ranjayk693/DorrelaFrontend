import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalLandingPageComponent } from './rental-landing-page.component';

describe('RentalLandingPageComponent', () => {
  let component: RentalLandingPageComponent;
  let fixture: ComponentFixture<RentalLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalLandingPageComponent]
    });
    fixture = TestBed.createComponent(RentalLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
