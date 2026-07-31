import { Component } from '@angular/core';
import { NavComponent } from '../../components/shared/nav/nav';
import { FooterComponent } from '../../components/shared/footer/footer';

@Component({
  selector: 'app-cookies-page',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './cookies-page.html',
  styleUrl: './cookies-page.css',
})
export class CookiesPage {
  cookies = [
    { nombre: '_ga', proveedor: 'Google Analytics', finalidad: 'Distinguir usuarios de forma anónima para estadísticas de uso', duracion: '2 años', tipo: 'Analítica' },
    { nombre: '_ga_*', proveedor: 'Google Analytics', finalidad: 'Mantener el estado de la sesión de análisis', duracion: '2 años', tipo: 'Analítica' },
    { nombre: '_fbp', proveedor: 'Meta (Facebook Pixel)', finalidad: 'Medición de conversiones y publicidad', duracion: '3 meses', tipo: 'Publicidad/Marketing' },
    { nombre: 'wcsp_cookie_consent', proveedor: 'Propia (Wildcares SP)', finalidad: 'Recordar la preferencia de cookies del usuario', duracion: '12 meses', tipo: 'Técnica (necesaria)' },
  ];
}