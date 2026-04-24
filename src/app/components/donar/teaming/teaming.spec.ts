import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teaming } from './teaming';

describe('Teaming', () => {
  let component: Teaming;
  let fixture: ComponentFixture<Teaming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teaming],
    }).compileComponents();

    fixture = TestBed.createComponent(Teaming);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
