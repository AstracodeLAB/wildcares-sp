import { Component } from '@angular/core';
import { NavComponent } from '../../components/shared/nav/nav';
import { FooterComponent } from '../../components/shared/footer/footer';
import { HeroComponent } from '../../components/home/hero/hero';
import { EsperanzaComponent } from '../../components/home/esperanza/esperanza';
import { QueHacerComponent } from '../../components/home/que-hacer/que-hacer';
import { ProyectosComponent } from '../../components/home/proyectos/proyectos';
import { ColaboraComponent } from '../../components/home/colabora/colabora';
import { EquipoComponent } from '../../components/home/equipo/equipo';
import { CtaBandComponent } from '../../components/home/cta-band/cta-band';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    HeroComponent,
    EsperanzaComponent,
    QueHacerComponent,
    ProyectosComponent,
    ColaboraComponent,
    EquipoComponent,
    CtaBandComponent,
  ],
  template: `
    <app-nav [active]="'home'" [onDark]="true"></app-nav>
    <app-hero></app-hero>
     <div class="act-banner">
      <div class="act-banner_content">
        <span>🌿 Descubre todas nuestras actividades de conservación en Málaga</span>
        <a href="/actividades">Ver actividades →</a>
      </div>
      </div>
    <app-que-hacer></app-que-hacer>
    <app-esperanza></app-esperanza>
    
   
    <app-proyectos></app-proyectos>
    <app-colabora></app-colabora>
    <app-equipo></app-equipo>
    <app-cta-band></app-cta-band>
    <app-footer></app-footer>
  `,
  styles: [`
    .act-banner {
      background: var(--green-700);
      color: var(--cream-50);
      padding: 18px 24px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  
    .act-banner_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      width: 100%;
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 32px;
  
      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 24px;
      }
    }
  
    .act-banner a {
      color: var(--cream-50);
      font-weight: 600;
      text-decoration: underline;
      white-space: nowrap;
    }
  
    .act-banner a:hover { color: var(--clay-400); }
  `]
})
export class HomePageComponent {}
