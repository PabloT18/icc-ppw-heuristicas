import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-heuristica-bueno',
  imports: [],
  templateUrl: './heuristica-bueno.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaBueno {

  lastOperation = signal('');

  executeOperation(op: string) {
    this.lastOperation.set(`Ejecutado: ${op}`);
  }

}
