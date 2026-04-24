import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esperanza } from './esperanza';

describe('Esperanza', () => {
  let component: Esperanza;
  let fixture: ComponentFixture<Esperanza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esperanza],
    }).compileComponents();

    fixture = TestBed.createComponent(Esperanza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
