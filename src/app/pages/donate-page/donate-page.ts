import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/shared/nav/nav';
import { FooterComponent } from '../../components/shared/footer/footer';
import { DonateHeroComponent } from '../../components/donar/donate-hero/donate-hero';
import { SuccessComponent } from '../../components/donar/success/success';
import { HazteSocio } from '../../components/donar/hazte-socio/hazte-socio';
import { Donativos } from '../../components/donar/donativos/donativos';
import { Teaming } from '../../components/donar/teaming/teaming';
import { Voluntariado } from '../../components/donar/voluntariado/voluntariado';
import { Partners } from '../../components/donar/partners/partners';

@Component({
  selector: 'app-donate-page',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    FooterComponent,
    DonateHeroComponent,
    SuccessComponent,
    HazteSocio,
    Teaming,
    Voluntariado,
    Donativos,
    Partners
  ],
  template: `
    <app-nav [active]="'colabora'" [onDark]="true"></app-nav>

     @if (done) {
      <app-success
        [amount]="finalAmount"
        [freq]="freq"
        (reset)="onReset()"
      ></app-success>
    } @else {
      <app-donate-hero></app-donate-hero>
      <app-hazte-socio></app-hazte-socio>
      <app-donativos></app-donativos>
      <app-teaming></app-teaming>
      <app-voluntariado></app-voluntariado>
      <app-partners></app-partners>
    }

    <app-footer></app-footer>
  `,
  styles: [`
    .donate-main {
      padding: 80px 24px;
      background: var(--cream-50, #fafaf7);
      max-width: 1100px;
      margin: 0 auto;
    }
    .donate-grid {
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 40px;
      align-items: start;
    }
    @media (max-width: 768px) {
      .donate-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class DonatePage {
  freq: 'once' | 'month' = 'once';
  amount = 30;
  custom = '';
  done = false;

  get finalAmount() {
    return this.custom ? parseFloat(this.custom) || 0 : this.amount;
  }

  onFreqChange(f: string) {
    this.freq = f as 'once' | 'month';
  }

  scrollToForm() {
    const el = document.querySelector('app-donate-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onDone() {
    this.done = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onReset() {
    this.done = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}