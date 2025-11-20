
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heuristica-malo',
  imports: [FormsModule],
  templateUrl: './heuristica-malo.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaMalo {
  accountNumber = '';
  amount = '';

  transfer() {
    // Sin validaciones - permite errores críticos
    console.log('Transferencia realizada');
  }
}
