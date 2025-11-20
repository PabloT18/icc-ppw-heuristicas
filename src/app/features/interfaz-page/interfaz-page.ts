import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Heuristica {
  id: number;
  titulo: string;
  icono: string;
  descripcion: string;
  ruta: string;
}

@Component({
  selector: 'app-interfaz-page',
  imports: [RouterLink],
  templateUrl: './interfaz-page.html',
  styleUrl: './interfaz-page.css',
})
export class InterfazPage {

  heuristicas = signal<Heuristica[]>([
    {
      id: 1,
      titulo: 'Visibilidad del Estado del Sistema',
      icono: '👁️',
      descripcion: 'El sistema debe mantener informados a los usuarios sobre lo que está ocurriendo.',
      ruta: '/heuristica/1'
    },
    {
      id: 2,
      titulo: 'Correspondencia con el Mundo Real',
      icono: '🌍',
      descripcion: 'El sistema debe hablar el idioma del usuario con conceptos familiares.',
      ruta: '/heuristica/2'
    },
    {
      id: 3,
      titulo: 'Control y Libertad del Usuario',
      icono: '🎮',
      descripcion: 'Los usuarios necesitan controlar el sistema y tener salidas de emergencia.',
      ruta: '/heuristica/3'
    },
    {
      id: 4,
      titulo: 'Consistencia y Estándares',
      icono: '📏',
      descripcion: 'Los usuarios no deben preguntarse si acciones diferentes significan lo mismo.',
      ruta: '/heuristica/4'
    },
    {
      id: 5,
      titulo: 'Prevención de Errores',
      icono: '🚫',
      descripcion: 'Mejor prevenir errores que mostrar buenos mensajes de error.',
      ruta: '/heuristica/5'
    },
    {
      id: 6,
      titulo: 'Reconocimiento vs Recordar',
      icono: '💭',
      descripcion: 'Hacer visibles objetos y acciones en lugar de requerir memoria.',
      ruta: '/heuristica/6'
    },
    {
      id: 7,
      titulo: 'Flexibilidad y Eficiencia',
      icono: '⚡',
      descripcion: 'Acelerar la interacción para usuarios expertos sin afectar novatos.',
      ruta: '/heuristica/7'
    },
    {
      id: 8,
      titulo: 'Diseño Estético y Minimalista',
      icono: '🎨',
      descripcion: 'No incluir información irrelevante que compita con contenido importante.',
      ruta: '/heuristica/8'
    },
    {
      id: 9,
      titulo: 'Reconocer y Recuperarse de Errores',
      icono: '🆘',
      descripcion: 'Mensajes de error en lenguaje sencillo con soluciones constructivas.',
      ruta: '/heuristica/9'
    },
    {
      id: 10,
      titulo: 'Ayuda y Documentación',
      icono: '📚',
      descripcion: 'Proporcionar ayuda fácil de buscar, enfocada en tareas del usuario.',
      ruta: '/heuristica/10'
    }
  ]);
}
