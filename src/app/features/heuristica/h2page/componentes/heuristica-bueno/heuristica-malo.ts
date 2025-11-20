import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-heuristica-malo',
  imports: [],
  templateUrl: './heuristica-malo.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaMalo {

  lastOperation = signal('');

  executeOperation(op: string) {
    this.lastOperation.set(`Ejecutado: ${op}`);
  }

}
