import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header-heuristica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-heuristica.html',

})
export class HeaderHeuristicaComponent {
  numeroHeuristica = input.required<string>();
  titulo = input.required<string>();
  concepto = input.required<string>();

  getIcon(): string {
    const iconMap: { [key: string]: string } = {
      '1': '👁️', '2': '🌍', '3': '🎮', '4': '📏', '5': '🚫',
      '6': '💭', '7': '⚡', '8': '🎨', '9': '🆘', '10': '📚'
    };
    return iconMap[this.numeroHeuristica()] || '🔍';
  }
}