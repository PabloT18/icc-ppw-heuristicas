import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heuristica-bueno',
  imports: [FormsModule],
  templateUrl: './heuristica-bueno.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaBueno {
  mensaje = '';
  tamanoTexto = 'text-base';
  modoExperto = signal(false);
  ultimoGuardado = signal('Nunca');

  toggleModoExperto() {
    this.modoExperto.update(v => !v);
  }

  insertarPlantilla(event: any) {
    const value = event.target.value;

    const plantillas: any = {
      saludo: 'Estimado/a,\n\nEspero que se encuentre bien.\n',
      recordatorio: 'Recordatorio:\nNo olvide revisar el siguiente pendiente...\n',
      despedida: 'Saludos cordiales,\n\n'
    };

    if (plantillas[value]) {
      this.mensaje += '\n' + plantillas[value];
    }
  }

  autoGuardar() {
    const fecha = new Date().toLocaleTimeString();
    this.ultimoGuardado.set(fecha);
  }

  enviar() {
    alert('Mensaje enviado');
  }

  limpiar() {
    this.mensaje = '';
  }

  @HostListener('document:keydown', ['$event'])
  manejarAtajos(event: KeyboardEvent) {
    if (!this.modoExperto()) return;

    if (event.ctrlKey && event.key === 'Enter') {
      this.enviar();
    }

    if (event.ctrlKey && event.key.toLowerCase() === 'l') {
      this.limpiar();
    }
  }
}
