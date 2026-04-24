import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CircleSlash, Camera, Phone, Bird } from 'lucide-angular';

@Component({
  selector: 'app-que-hacer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './que-hacer.html',
  styleUrls: ['./que-hacer.css']
})
export class QueHacerComponent {
  readonly CircleSlash = CircleSlash;
  readonly Camera = Camera;
  readonly Phone = Phone;
  readonly Bird = Bird;

  steps = [
    { icon: CircleSlash, title: '1. No la toques', desc: 'Evita manipularla sin necesidad. El estrés puede ser fatal para un ave herida. Observa desde la distancia primero.', cls: 'step--rescate' },
    { icon: Camera, title: '2. Fotografíala', desc: 'Haz una foto del ave y de su entorno. Nos ayuda a identificar la especie y valorar la urgencia antes de desplazarnos.', cls: 'step--educa' },
    { icon: Phone, title: '3. Llámanos', desc: 'Contacta con nosotros lo antes posible. Tenemos atención todos los días y te guiaremos paso a paso.', cls: 'step--divers' },
    { icon: Bird, title: '4. Espera con calma', desc: 'Si hay que moverla, te indicamos cómo hacerlo de forma segura. No le des agua ni comida hasta consultarnos.', cls: 'step--volun' },
  ];
  categories = [
    { title: 'Primeros auxilios', img: 'assets/quehacer/rapaz.jpg' },
    { title: 'Vencejos', img: 'assets/quehacer/vencejito.jpg' },
    { title: 'Gaviotas y marinas', img: 'assets/quehacer/gaviota.jpg' },
    { title: 'Rapaces', img: 'assets/quehacer/buhito.jpg' },
    { title: 'Columbiformes', img: 'assets/quehacer/palomaTorcaz.JPG' },
    { title: 'Paseriformes', img: 'assets/quehacer/gorrion.JPG' },
  ];
}