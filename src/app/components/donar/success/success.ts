import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success.html',
  styleUrls: ['./success.css']
})
export class SuccessComponent {
  @Input() amount = 0;
  @Input() freq: 'once' | 'month' = 'once';
  @Output() reset = new EventEmitter<void>();
}