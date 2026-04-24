import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class NavComponent {
  @Input() active = 'home';
  @Input() onDark = true;

  scrolled = false;
  menuOpen = false;

  items = [
    { id: 'home', label: 'Inicio', href: '/' },
    { id: 'actividades', label: 'Actividades', href: '/actividades' },
    { id: 'ave', label: '¿Has encontrado un ave?', href: '/que-hacer' },
    { id: 'proyectos', label: 'Proyectos', href: '/#proyectos' },
    { id: 'colabora', label: 'Colabora', href: '/#colabora' },
    { id: 'sobre', label: 'Sobre nosotros', href: '/#sobre' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}