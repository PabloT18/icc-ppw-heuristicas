import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heuristica-bueno',
  imports: [FormsModule],
  templateUrl: './heuristica-bueno.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaBueno {
  avanzado = signal(false);

  toggleAvanzado() {
    this.avanzado.update(v => !v);
  }
}
