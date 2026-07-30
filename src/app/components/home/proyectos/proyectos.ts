import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css'],
})
export class ProyectosComponent {
  activeTab = 'wildcares';

  tabs = [
    { id: 'wildcares', label: '🕊 Proyecto Wildcares' },
    { id: 'rios', label: '🌊 Proyecto Ríos' },
    { id: 'terranido', label: '🏠 Proyecto Terranido' },
  ];

  youtubeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/8s8oI__0Mb8',
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
        'Proyectos de conservación',
      ],
      pdf: 'assets/pdfs/dossier-wildcares.pdf',
      video: true,
      financiadoLabel: 'Cofinanciado por',
      financiadores: [
        {
          name: 'Málaga Province Environment Foundation',
          logo: 'assets/proyectos/Malaga_Province_Environment_Foundation.svg',
        },
        { name: 'Fundación Oxígeno', logo: 'assets/proyectos/oxigeno.webp' },
      ],
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
      financiadoLabel: 'Financiado por',
      financiadores: [
        {
          name: 'Diputación Provincial de Málaga',
          logo: 'assets/proyectos/DiputacionProvincialMalaga.jpg',
        },
        { name: 'Málaga Viva', logo: 'assets/proyectos/ILoveMalagaViva.jpg' },
        { name: 'Fundación Unicaja', logo: 'assets/proyectos/FundacionUnicaja.jpg' },
      ],
      video: false,
      imagen: 'assets/proyectos/proyecto-rios.jpeg',
    },
    terranido: {
      name: 'Proyecto Terranido',
      desc: 'Iniciativa dedicada a la construcción e instalación de nidos bioceramicos sostenibles para golondrinas, aviones y vencejos. En colaboración con Todobarro, empresa de cerámica artesanal que se encarga del diseño e innovación de los nidos.',
      kpis: [
        { val: '3', unit: '', label: 'Líneas de acción' },
        { val: 'Andalucía', unit: '', label: 'Lugar de actuación' },
        { val: '2026', unit: '', label: 'Año de inicio' },
      ],
      lineas: [
        'Construcción de nidos bioceramicos de barro para Golondrinas, aviones y Vencejos',
        'Educación ambiental enfocada en mejorar la conservación de golondrinas, aviones y vencejos',
        'Mejorar la nidificación de vencejos, aviones y golondrinas',
        'Implementar una mejor ecología circular, nuevas edificaciones y control de plagas',
      ],
      colaboradores: [
        {
          name: 'Todobarro.',
          desc: 'Empresa de cerámica artesanal encargada del diseño de los nidos',
        },
      ],
      video: false,
      imagen: 'assets/proyectos/terranido-pic.JPG',
      pdf: 'assets/pdfs/proyecto-terranido.pdf',
    },
  };

  get current() {
    return this.data[this.activeTab];
  }

  setTab(id: string) {
    this.activeTab = id;
  }
}
