import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  parallaxY = 0;

  stats = [
    { num: 2340, suffix: '+', label: 'Aves rescatadas' },
    { num: 82, suffix: '%', label: 'Tasa liberación' },
    { num: 8, suffix: '', label: 'Años cuidando' },
  ];

  private onScroll = () => {
    this.parallaxY = window.scrollY * 0.3;
  };

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}