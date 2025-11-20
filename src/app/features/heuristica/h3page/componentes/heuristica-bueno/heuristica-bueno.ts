import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heuristica-bueno',
  imports: [FormsModule],
  templateUrl: './heuristica-bueno.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeuristicaBueno {
  content = '';
  showModal = signal(false);
  saveProgress = signal(0);
  history = signal<string[]>(['']);
  currentIndex = signal(0);

  onTextChange() {
    const newHistory = this.history().slice(0, this.currentIndex() + 1);
    newHistory.push(this.content);
    this.history.set(newHistory);
    this.currentIndex.set(newHistory.length - 1);
  }

  canUndo(): boolean {
    return this.currentIndex() > 0;
  }

  canRedo(): boolean {
    return this.currentIndex() < this.history().length - 1;
  }

  undo() {
    if (this.canUndo()) {
      this.currentIndex.update(i => i - 1);
      this.content = this.history()[this.currentIndex()];
    }
  }

  redo() {
    if (this.canRedo()) {
      this.currentIndex.update(i => i + 1);
      this.content = this.history()[this.currentIndex()];
    }
  }

  saveText() {
    this.showModal.set(true);
    this.saveProgress.set(0);

    const interval = setInterval(() => {
      const progress = this.saveProgress();
      if (progress < 100) {
        this.saveProgress.set(Math.min(progress + 20, 100));
      } else {
        clearInterval(interval);
        setTimeout(() => this.closeModal(), 1000);
      }
    }, 500);
  }

  closeModal() {
    this.showModal.set(false);
    this.saveProgress.set(0);
  }

  cancelSave() {
    this.closeModal();
  }

  saveInBackground() {
    this.showModal.set(false);
    // Continúa guardando en segundo plano
  }

  clearText() {
    if (confirm('¿Estás seguro de que quieres limpiar todo el texto?')) {
      this.content = '';
      this.onTextChange();
    }
  }

  loadTemplate() {
    this.content = 'Plantilla de ejemplo:\n\n1. Introducción\n2. Desarrollo\n3. Conclusiones';
    this.onTextChange();
  }
}
