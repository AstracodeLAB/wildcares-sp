import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesPage } from './actividades-page';

describe('ActividadesPage', () => {
  let component: ActividadesPage;
  let fixture: ComponentFixture<ActividadesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ActividadesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
