import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css']
})
export class ProyectosComponent {
  activeTab = 'wildcares';

  tabs = [
    { id: 'wildcares', label: '🕊 Proyecto Wildcares' },
    { id: 'rios', label: '🌊 Proyecto Ríos' },
  ];

  youtubeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/Y-IUDmlqQ_c'
    );
  }

  data: Record<string, any> = {
    wildcares: {
      name: 'Proyecto Wildcares SP',
      desc: 'Centro Socio-Ambiental enfocado en la conservación de fauna silvestre y la educación ambiental en la provincia de Málaga. Rescatamos, rehabilitamos y liberamos fauna salvaje, especialmente aves.',
      kpis: [
        { val: '2023', unit: '', label: 'Año de inicio' },
        { val: '4', unit: '', label: 'Fundadores' },
        { val: 'Málaga', unit: '', label: 'Sede' },
      ],
      lineas: [
        'Cría, rehabilitación y recuperación de especies silvestres',
        'Protección de colonias y lugares de nidificación',
        'Educación ambiental en colegios, institutos y universidades',
        'Actividades adaptadas para personas con diversidad funcional',
      ],
      pdf: 'assets/pdfs/dossier-wildcares.pdf',
      video: true,
    },
    rios: {
      name: 'Proyecto Ríos',
      desc: 'Estrategias Sostenibles para la Gestión del Agua en la Axarquía: Rehabilitación de Ríos, Técnicas de Retención Hídrica y Educación Comunitaria. Financiado por la Diputación de Málaga y Fundación Unicaja.',
      kpis: [
        { val: '3', unit: '', label: 'Líneas de acción' },
        { val: 'Axarquía', unit: '', label: 'Zona' },
        { val: '2024', unit: '', label: 'En curso' },
      ],
      lineas: [
        'Renaturalización de ríos: replantación de especies autóctonas',
        'Limpieza de ríos: retirada de residuos y especies exóticas',
        'Fosas semicirculares: retención hídrica y mejora del suelo',
        'Educación comunitaria sobre gestión sostenible del agua',
      ],
      financiadores: [
        { name: 'Diputación Provincial de Málaga', logo: 'assets/proyectos/DiputacionProvincialMalaga.jpg' },
        { name: 'Málaga Viva', logo: 'assets/proyectos/ILoveMalagaViva.jpg' },
        { name: 'Fundación Unicaja', logo: 'assets/proyectos/FundacionUnicaja.jpg' },
      ],
      video: false,
    },
  };

  get current() {
    return this.data[this.activeTab];
  }

  setTab(id: string) {
    this.activeTab = id;
  }
}