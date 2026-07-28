import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empresas.html',
  styleUrls: ['./empresas.css']
})
export class EmpresasComponent {
  tipos = [
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
      title: 'Aportación económica directa',
      desc: 'Donaciones destinadas a proyectos concretos de conservación, con certificado fiscal.'
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></svg>`,
      title: 'Colaboración de marca',
      desc: 'Asociáis vuestra empresa a un proyecto concreto de conservación de fauna silvestre.'
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'Voluntariado corporativo',
      desc: 'Vuestro equipo participa directamente en rescates, plantaciones o limpiezas de ríos.'
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 17l2 2 4-4M21 10l-7 7-3-3-4 4-4-4 7-7 3 3 8-8z"/></svg>`,
      title: 'Team building en la naturaleza',
      desc: 'Rutas ornitológicas, retos colaborativos o jornadas de conservación activa, dentro o fuera de la empresa.'
    }
  ];
}