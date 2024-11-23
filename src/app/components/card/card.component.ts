import { Component, Input } from '@angular/core';
import { Projeto } from '../../models/Projeto';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() projeto!: Projeto;
}