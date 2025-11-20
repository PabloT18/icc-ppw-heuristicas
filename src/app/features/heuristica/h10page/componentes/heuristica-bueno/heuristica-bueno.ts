import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heuristica-bueno',
  imports: [FormsModule],
  templateUrl: './heuristica-bueno.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaBueno {
  estado = signal<'ok' | 'error-tipo' | 'error-peso' | 'neutral'>('neutral');
  archivoValido = signal(false);
  ayudaVisible = signal(false);

  toggleAyuda() {
    this.ayudaVisible.update(v => !v);
  }

  validarArchivo(event: any) {
    const file = event.target.files[0];

    if (!file) {
      this.estado.set('neutral');
      this.archivoValido.set(false);
      return;
    }

    const tipoValido =
      file.type === 'application/pdf' ||
      file.type ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    if (!tipoValido) {
      this.estado.set('error-tipo');
      this.archivoValido.set(false);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      this.estado.set('error-peso');
      this.archivoValido.set(false);
      return;
    }

    this.estado.set('ok');
    this.archivoValido.set(true);
  }
}
