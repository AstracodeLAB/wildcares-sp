import { Component } from '@angular/core';
import { NavComponent } from '../../components/shared/nav/nav';
import { FooterComponent } from '../../components/shared/footer/footer';

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './privacy-page.html',
  styleUrl: './privacy-page.css',
})
export class PrivacyPage {}