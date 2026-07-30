import { Component } from '@angular/core';
import { NavComponent } from '../../components/shared/nav/nav';
import { FooterComponent } from '../../components/shared/footer/footer';

interface MerchProduct {
  name: string;
  image: string;
  desc: string;
  variants?: string[];
  tag?: string;
}

@Component({
  selector: 'app-merch-page',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './merch-page.html',
  styleUrl: './merch-page.css',
})
export class MerchPage {
  contactHref =
    'https://wa.me/34681058499?text=Hola!%20Quiero%20encargar%20merchandising%20solidario';
  contactEmail = 'mailto:wildcares2@gmail.com?subject=Encargo%20merchandising';

  steps = [
    {
      n: '01',
      title: 'Elige tu producto',
      desc: 'Mira el catálogo y decide qué te gusta, color y talla si aplica.',
    },
    {
      n: '02',
      title: 'Contacta con nosotros',
      desc: 'Escríbenos por WhatsApp o email indicando el pedido.',
    },
    {
      n: '03',
      title: 'Coordinamos entrega y pago',
      desc: 'Bizum o transferencia, y recogida o envío según disponibilidad.',
    },
  ];

  products: MerchProduct[] = [
    {
      name: 'Taza',
      image: '/assets/merch/taza.jpeg',
      desc: 'Taza cerámica con la ilustración original de nuestros gorriones.',
    },
    {
      name: 'Gorra',
      image: '/assets/merch/gorra.jpeg',
      desc: 'Gorra bordada con nuestro logo. Ajustable, unisex.',
      variants: ['Negro', 'Blanco', 'Azul marino'],
    },
    {
      name: 'Bolsa tote',
      image: '/assets/merch/tote.jpeg',
      desc: 'Bolsa de algodón 100% natural, ideal para el día a día.',
    },
    {
      name: 'Camiseta logo',
      image: '/assets/merch/camiseta.jpeg',
      desc: 'Camiseta de algodón orgánico con nuestro logo en el pecho.',
      variants: ['Negro', 'Blanco', 'Azul marino'],
    },
    {
      name: 'Pin',
      image: '/assets/merch/pin.png',
      desc: 'Pin esmaltado con nuestro logo, perfecto para mochilas y chaquetas.',
    },
    {
      name: 'Llavero',
      image: '/assets/merch/llavero.png',
      desc: 'Llavero metálico con el logo de WildCares SP.',
    },
  ];
}
