import { Component, Input } from '@angular/core';
import { iBikini } from '../../Models/i-bikini';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardBikini: iBikini | null = null;
}
