import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariadoEmpresasComponent } from './voluntariado-empresas';

describe('VoluntariadoEmpresasComponent', () => {
  let component: VoluntariadoEmpresasComponent;
  let fixture: ComponentFixture<VoluntariadoEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoluntariadoEmpresasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VoluntariadoEmpresasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
