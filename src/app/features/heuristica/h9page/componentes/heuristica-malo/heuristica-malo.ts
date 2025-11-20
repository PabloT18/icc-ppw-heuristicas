
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heuristica-malo',
  imports: [FormsModule],
  templateUrl: './heuristica-malo.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaMalo {
  user = '';
  password = '';
  error = signal(false);

  login() {
    this.error.set(true);
    console.error('ERROR 401 - BAD CREDENTIALS');
  }
}
