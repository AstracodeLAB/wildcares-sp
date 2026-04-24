import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueHacerPage } from './que-hacer-page';

describe('QueHacerPage', () => {
  let component: QueHacerPage;
  let fixture: ComponentFixture<QueHacerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueHacerPage],
    }).compileComponents();

    fixture = TestBed.createComponent(QueHacerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
