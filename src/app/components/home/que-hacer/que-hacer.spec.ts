import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueHacer } from './que-hacer';

describe('QueHacer', () => {
  let component: QueHacer;
  let fixture: ComponentFixture<QueHacer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueHacer],
    }).compileComponents();

    fixture = TestBed.createComponent(QueHacer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
