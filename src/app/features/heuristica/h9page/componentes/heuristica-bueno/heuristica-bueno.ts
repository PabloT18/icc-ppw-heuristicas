import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heuristica-bueno',
  imports: [FormsModule],
  templateUrl: './heuristica-bueno.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaBueno {
  user = '';
  password = '';

  error = signal(false);
  verPass = signal(false);

  estadoUsuario = signal<'neutral' | 'error' | 'ok'>('neutral');

  validarUsuario() {
    if (this.user.length === 0) {
      this.estadoUsuario.set('neutral');
    } else if (this.user.length < 3) {
      this.estadoUsuario.set('error');
    } else {
      this.estadoUsuario.set('ok');
    }
  }

  toggleVerPass() {
    this.verPass.update(v => !v);
  }

  login() {
    if (this.user !== 'admin' || this.password !== '1234') {
      this.error.set(true);
    } else {
      alert('Inicio de sesión exitoso');
      this.error.set(false);
    }
  }

  reintentar() {
    this.error.set(false);
  }
}
