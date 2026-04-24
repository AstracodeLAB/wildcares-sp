import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-colabora',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './colabora.html',
  styleUrls: ['./colabora.css']
})
export class ColaboraComponent {
  opts = [
    {
      icon: 'heart',
      title: 'Dona',
      desc: 'Aporta lo que esté en tu mano. Cada euro cuenta y va íntegro a nuestros proyectos de rescate y rehabilitación.',
      cta: 'Donar ahora',
      href: '/donar',
      featured: true
    },
    {
      icon: 'users',
      title: 'Voluntariado',
      desc: 'Únete a un equipo comprometido con la fauna. Formación gratuita y horario flexible.',
      cta: 'Apuntarme',
      href: '/donar/#voluntariado',
      featured: false
    },
    {
      icon: 'handshake',
      title: 'Partners',
      desc: 'Colabora desde tu empresa con una visión compartida: la conservación del litoral malagueño.',
      cta: 'Info para empresas',
      href: '/donar/#partners',
      featured: false,
      accent: true
    },
  ];
}
