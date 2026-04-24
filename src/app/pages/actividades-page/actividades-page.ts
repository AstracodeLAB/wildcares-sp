import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/shared/nav/nav';
import { FooterComponent } from '../../components/shared/footer/footer';

@Component({
  selector: 'app-actividades-page',
  standalone: true,
  imports: [CommonModule, NavComponent, FooterComponent],
  templateUrl: './actividades-page.html',
  styleUrl: './actividades-page.css',
})
export class ActividadesPage {
  activeSection = 'educativas';
  selectedImg: string | null = null;
  selectedTitle: string | null = null;


  sections = [
    { id: 'educativas', label: 'Educativas' },
    { id: 'diversidad', label: 'Diversidad funcional' },
    { id: 'otras', label: 'Otras actividades' },
  ];

  educativas = {
    actividades: [
      {
        title: 'Experimentos Científicos',
        desc: 'Experimentos científicos con poco material y atractivos visualmente para los niños. Actividades prácticas que fomentan el interés por la ciencia desde edades tempranas.',
        img: 'assets/actividades/PequeCiencia.jpg',
      },
      {
        title: 'Rutas Ornitológicas',
        desc: 'Rutas ornitológicas guiadas por expertos en avifauna. Entornos naturales diversos con duración variable según el recorrido.',
        img: 'assets/actividades/gymkanaEcologica.jpg',
      },
      {
        title: 'Talleres de Conservación',
        desc: 'Workshops de conservación de fauna, dinámica de concienciación, fosiliza tus huellas, recapacicla... Objetivo: fomentar la conciencia ambiental y participación activa.',
        img: 'assets/actividades/AndreaCharla.jpeg',
      },
    ],
    cursos: [
      { tipo: 'SEMINARIO', titulo: 'Contaminación lumínica en pardelas. Biología y conservación.' },
      { tipo: 'SEMINARIO', titulo: 'Rescate de fauna silvestre de Efectos Trampa' },
      { tipo: 'SEMINARIO', titulo: 'Rescate y recuperación de aves granívoras' },
      { tipo: 'PONENCIA', titulo: 'Charlas Disney' },
      { tipo: 'PONENCIA', titulo: '¿Qué hacer cuando termino la carrera?' },
      { tipo: 'CURSO', titulo: 'Trabajando con Fauna Salvaje' },
      { tipo: 'FORMACIÓN', titulo: 'Cuerpos de seguridad', pdf: true },
      { tipo: 'CHARLA', titulo: 'Cuenta cuentos' },
      { tipo: 'TRIVIAL', titulo: 'Bio-Trivial' },
      { tipo: 'RUTA', titulo: 'Ruta Por el Clima' },
    ],
  };

  diversidad = {
    actividades: [
      {
        title: 'Actividades Personalizadas',
        desc: 'Programa de actividades adaptadas y personalizadas para personas con diversidad funcional. Objetivo: facilitar el acceso a la naturaleza de manera inclusiva.',
        img: 'assets/actividades/actividadesPersonalizadas.jpg',
      },
      {
        title: 'Rutas Sensoriales',
        desc: 'Rutas adaptadas que estimulan los diferentes sentidos para conectar con la naturaleza. Itinerarios accesibles con elementos multisensoriales.',
        img: 'assets/actividades/ruta_sensorial.jpg',
      },
      {
        title: 'Conectar con la Naturaleza',
        desc: 'Experiencias inclusivas diseñadas para fomentar la conexión emocional con el entorno natural. Actividades terapéuticas y recreativas adaptadas a diferentes capacidades.',
        img: 'assets/actividades/dialogo.jpg',
      },
    ],
    cursos: [
      { tipo: 'SEMINARIO', titulo: 'Contaminación lumínica en aves nocturnas. Sesión especializada sobre el impacto de la contaminación lumínica en la fauna nocturna.' },
      { tipo: 'TALLER', titulo: 'Conservación de espacios naturales. Actividades prácticas de conservación ambiental adaptadas a diferentes capacidades.' },
      { tipo: 'CHARLA', titulo: 'Biodiversidad urbana. Descubrimiento de la vida silvestre en entornos urbanos accesibles.' },
    ],
  };

  otras = [
    {
      title: 'Team Building',
      desc: 'Actividades de cohesión grupal en la naturaleza. Objetivo: fomentar la cohesión y trabajo en equipo.',
      img: 'assets/actividades/TeamBuilding.jpg',
    },
    {
      title: 'Rutas Ornitológicas',
      desc: 'Rutas ornitológicas guiadas por expertos en avifauna. Entornos naturales diversos con duración variable.',
      img: 'assets/actividades/cartelRutasOrnitologicas.jpg',
    },
    {
      title: 'Estudio de Avifauna',
      desc: 'Investigación científica de la diversidad de aves. Objetivo: contribuir al conocimiento de la avifauna local.',
      img: 'assets/actividades/Estudios_avifauna.jpg',
    },
  ];

  getTipoBadgeColor(tipo: string): string {
    const map: Record<string, string> = {
      'SEMINARIO': 'sea',
      'PONENCIA': 'clay',
      'CURSO': 'green',
      'FORMACIÓN': 'green',
      'CHARLA': 'clay',
      'TRIVIAL': 'sea',
      'RUTA': 'green',
      'TALLER': 'clay',
    };
    return map[tipo] || 'green';
  }
  openLightbox(img: string, title: string) {
    this.selectedImg = img;
    this.selectedTitle = title;
  }

  closeLightbox() {
    this.selectedImg = null;
    this.selectedTitle = null;
  }
}