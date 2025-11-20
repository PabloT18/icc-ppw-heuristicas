
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heuristica-malo',
  imports: [FormsModule],
  templateUrl: './heuristica-malo.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaMalo {
  content = '';
  showModal = signal(false);

  saveText() {
    this.showModal.set(true);
    // Usuario queda atrapado por 5 segundos sin poder cancelar
    setTimeout(() => {
      this.showModal.set(false);
    }, 5000);
  }

}
