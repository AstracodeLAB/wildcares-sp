import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.html',
  styleUrls: ['./equipo.css']
})
export class EquipoComponent {
  people = [
    { name: 'Antony Luque', 
      role: 'Biólogo y gestor de fauna silvestre por la Universidad de Murcia. Destaca en el campo de las aves marinas y la educación ambiental. Ha participado en múltiples proyectos entre ellos en un centro de recuperación con Birdlife Malta, campañas de educación ambiental “Mares que saben” o entidades como AAP Primadomus. Colabora con personas con diversidad funcional desde joven y por ello intenta aplicar la educación ambiental a este colectivo, mediante sus dos pasiones: la comedia y la biología. ', 
      img: 'assets/equipo/antonyPerfilWeb.jpeg' },
    { name: 'Rocío Gómez', 
      role: ' Veterinaria de fauna silvestre graduada en la Universidad de León. Destaca en el campo de la cría, especialmente con apodiformes y paseriformes. Ha trabajado en Centros de Recuperación de Fauna como RIAS (Olhao, Portugal), el CERI (Toledo) y el CRFS de Albacete, y en proyectos para la recuperación del Lince Ibérico. Es miembro también de la asociación SOS Vencejos y combina el campo de la Veterinaria con el de la Educación ambiental usando como herramienta principal el arte y la pintura. .', 
      img: 'assets/equipo/RocioGomez.jpg' },
    { name: 'Andrea Guirado', 
      role: 'Ambientóloga graduada en la Universidad de Cádiz y especializada en el ámbito de la conservación por la Universidad Pablo de Olavide de Sevilla. Creadora de la Asociación SOS Vencejos y miembro de SEO Ceuta. Destaca en el campo del rescate, manejo y cría de fauna silvestre. Ha colaborado en diferentes proyectos de investigación de avifauna, destacando como especies, la pardela cenicienta y la ganga ibérica. Además, ha trabajado en el CRAS de Zamora y realiza divulgación en redes sociales con el fin de crear una mayor conciencia ambiental en la sociedad. ', 
      img: 'assets/equipo/Andrea_PerfilWeb.jpeg' },
   
  ];
}
