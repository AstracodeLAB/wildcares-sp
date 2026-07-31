import { Component } from '@angular/core';
import { NavComponent } from '../../components/shared/nav/nav';
import { FooterComponent } from '../../components/shared/footer/footer';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.css',
})
export class LegalPage {}