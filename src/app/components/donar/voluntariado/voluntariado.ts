import { Component } from '@angular/core';

@Component({
  selector: 'app-voluntariado',
  standalone: true,
  imports: [],
  templateUrl: './voluntariado.html',
  styleUrl: './voluntariado.css',
})
export class Voluntariado {
  areas = [
    {
      icon: '🦅',
      title: 'Recuperación de aves',
      desc: 'Colaborarás en el rescate y rehabilitación de aves heridas. Aprenderás técnicas de manejo y cuidado de fauna silvestre junto a nuestro equipo veterinario.',
      color: 'green',
    },
    {
      icon: '🌿',
      title: 'Proyectos de conservación',
      desc: 'Participarás en distintos proyectos de restauración de hábitats, monitorización de especies y limpieza de espacios naturales en Málaga.',
      color: 'sea',
    },
    {
      icon: '📚',
      title: 'Educación ambiental',
      desc: 'Impartirás clases y talleres de educación ambiental en escuelas locales, acercando la naturaleza a los más pequeños y generando conciencia desde la infancia.',
      color: 'clay',
    },
  ];
}