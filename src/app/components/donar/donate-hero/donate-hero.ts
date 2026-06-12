import { Component } from '@angular/core';

@Component({
  selector: 'app-donate-hero',
  standalone: true,
  templateUrl: './donate-hero.html',
  styleUrls: ['./donate-hero.css']
})
export class DonateHeroComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
