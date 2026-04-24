import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners {
  partners = [
    { name: 'Partner 1', logo: 'assets/partners/logoLibero.jpeg' },
    { name: 'Partner 2', logo: 'assets/partners/malagaProvinceFoundation.png' },
    { name: 'Partner 3', logo: 'assets/partners/mivet.png' },
    { name: 'Partner 4', logo: 'assets/partners/murcielagosMalaga.png' },
    { name: 'Partner 5', logo: 'assets/partners/LogoIncyde.png' },
    { name: 'Partner 6', logo: 'assets/partners/brutal.png' },
    { name: 'Partner 6', logo: 'assets/partners/Konductual.png' },
    { name: 'Partner 6', logo: 'assets/partners/GuardaBosques.png' },
    { name: 'Partner 6', logo: 'assets/partners/logoAyuntamiento.png' },
    { name: 'Partner 6', logo: 'assets/partners/basoa.png' },
  ];
}
