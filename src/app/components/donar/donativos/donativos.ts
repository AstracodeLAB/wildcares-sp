import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donativos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donativos.html',
  styleUrl: './donativos.css',
})
export class Donativos {
  activeMethod: string | null = null;

  toggleMethod(method: string) {
    this.activeMethod = this.activeMethod === method ? null : method;
  }
}