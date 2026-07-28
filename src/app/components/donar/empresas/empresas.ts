import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empresas.html',
  styleUrls: ['./empresas.css'],
})
export class EmpresasComponent {
  tipos = [
    {
      icon: 'donacion',
      title: 'Aportación económica directa',
      desc: 'Donaciones destinadas a proyectos concretos de conservación, con certificado fiscal.',
    },
    {
      icon: 'marca',
      title: 'Colaboración de marca',
      desc: 'Asociáis vuestra empresa a un proyecto concreto de conservación de fauna silvestre.',
    },
    {
      icon: 'voluntariado',
      title: 'Voluntariado corporativo',
      desc: 'Vuestro equipo participa directamente en rescates, plantaciones o limpiezas de ríos.',
    },
    {
      icon: 'teambuilding',
      title: 'Team building en la naturaleza',
      desc: 'Rutas ornitológicas, retos colaborativos o jornadas de conservación activa, dentro o fuera de la empresa.',
    },
  ];
}
