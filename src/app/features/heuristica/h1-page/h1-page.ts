import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeaderHeuristicaComponent } from "../components/header-heuristica/header-heuristica";
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-h1-page',
  imports: [HeaderHeuristicaComponent],
  templateUrl: './h1-page.html',
  styleUrl: './h1-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H1Page {
  selectedFile1: File | null = null;

  onFileSelect1(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile1() {
    if (!this.selectedFile) return;

    // Simula subida - SIN FEEDBACK AL USUARIO
    setTimeout(() => {
      console.log('Archivo subido');
    }, 3000);
  }
  /////////

  selectedFile: File | null = null;
  isUploading = signal(false);
  uploadComplete = signal(false);
  progress = signal(0);
  currentStatus = signal<'idle' | 'preparing' | 'uploading' | 'completed'>('idle');

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.currentStatus.set('preparing');
      this.uploadComplete.set(false);
      this.progress.set(0);
    }
  }

  uploadFile() {
    if (!this.selectedFile || this.isUploading()) return;

    this.isUploading.set(true);
    this.currentStatus.set('uploading');
    this.progress.set(0);

    // Simula progreso realista de subida
    const interval = setInterval(() => {
      const currentProgress = this.progress();
      if (currentProgress < 100) {
        // Progreso irregular más realista
        const increment = Math.random() * 15 + 5;
        const newProgress = Math.min(currentProgress + increment, 100);
        this.progress.set(Math.floor(newProgress));
      } else {
        clearInterval(interval);
        this.isUploading.set(false);
        this.uploadComplete.set(true);
        this.currentStatus.set('completed');
      }
    }, 200);
  }

  getStatusIcon(): string {
    switch (this.currentStatus()) {
      case 'preparing': return '📋';
      case 'uploading': return '⬆️';
      case 'completed': return '✅';
      default: return '💤';
    }
  }

  getStatusMessage(): string {
    switch (this.currentStatus()) {
      case 'preparing': return 'Listo para subir - Haz clic en el botón';
      case 'uploading': return `Subiendo archivo... ${this.progress()}% completado`;
      case 'completed': return '¡Archivo subido exitosamente al servidor!';
      default: return 'Esperando selección de archivo...';
    }
  }

}
