import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/shared/nav/nav';
import { FooterComponent } from '../../components/shared/footer/footer';

@Component({
  selector: 'app-que-hacer-page',
  standalone: true,
  imports: [CommonModule, NavComponent, FooterComponent],
  templateUrl: './que-hacer-page.html',
  styleUrls: ['./que-hacer-page.css']
})
export class QueHacerPageComponent {
  cards = [
    {
      title: 'Primeros auxilios generales',
      img: 'assets/quehacer/rapaz.jpg',
      pdfs: [{ label: 'Descargar PDF', url: 'assets/pdfs/AUXILIOS GENERALES AVES.pdf' }],
    },
    {
      title: 'Vencejos',
      img: 'assets/quehacer/vencejito.jpg',
      pdfs: [{ label: 'Descargar PDF', url: 'assets/pdfs/Cartel_Vencejos.pdf' }],
    },
    {
      title: 'Gaviotas y aves marinas',
      img: 'assets/quehacer/gaviota.jpg',
      pdfs: [{ label: 'Descargar PDF', url: 'assets/pdfs/Gaviotas.pdf' }],
    },
    {
      title: 'Rapaces',
      img: 'assets/quehacer/buhito.jpg',
      pdfs: [{ label: 'Descargar PDF', url: 'assets/pdfs/PROTOCOLO DE ACTUACIÓN AVES RAPACES.pdf' }],
    },
    {
      title: 'Columbiformes',
      img: 'assets/quehacer/palomaTorcaz.JPG',
      pdfs: [{ label: 'Descargar PDF', url: 'assets/pdfs/Cartel_Palomas_Y_Tórtolas_.pdf' }],
    },
    {
      title: 'Paseriformes',
      img: 'assets/quehacer/gorrion.JPG',
      pdfs: [
        { label: 'Ficha 1', url: 'assets/pdfs/Verdecillo,_Verderón,_Jilguero,_Pardillo.pdf' },
        { label: 'Ficha 2', url: 'assets/pdfs/paseriformes-2.pdf' },
      ],
    },
  ];

  expandedCard: string | null = null;

  toggleExpand(title: string) {
    this.expandedCard = this.expandedCard === title ? null : title;
  }
}
