import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateHero } from './donate-hero';

describe('DonateHero', () => {
  let component: DonateHero;
  let fixture: ComponentFixture<DonateHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateHero],
    }).compileComponents();

    fixture = TestBed.createComponent(DonateHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
