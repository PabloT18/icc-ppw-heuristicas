# Heurísticas de Usabilidad - Ejemplos Interactivos

Uaa aplicación web educativa construida con **Angular 20+** que demuestra las **10 Heurísticas de Usabilidad de Jakob Nielsen** a través de ejemplos prácticos comparativos.

Pagina desplegada: [LINK](https://pablot18.github.io/icc-ppw-heuristicas/)

## Sobre el Proyecto

Esta aplicación presenta cada una de las heurísticas de Nielsen mediante:
- ❌ **Ejemplos Malos**: Interfaces que violan las heurísticas
- ✅ **Ejemplos Buenos**: Implementaciones correctas que siguen las mejores prácticas

### Heurísticas 

1. **Visibilidad del Estado del Sistema** - Feedback visual y progreso en tiempo real
2. **Correspondencia entre el Mundo Real y el Sistema** - Lenguaje familiar vs técnico
3. **Control y Libertad del Usuario** - Opciones de deshacer y escapar
4. **Consistencia y Estándares** - Patrones de diseño coherentes
5. **Prevención de Errores** - Validación y confirmaciones
6. **Reconocimiento en lugar de Recordar** - Elementos visuales claros
7. **Flexibilidad y Eficiencia de Uso** - Atajos y personalización
8. **Diseño Estético y Minimalista** - Información relevante únicamente
9. **Ayuda a Reconocer y Recuperarse de Errores** - Mensajes de error útiles
10. **Ayuda y Documentación** - Guías contextuales

## 🛠️ Tecnologías Utilizadas

- **Angular 20+** con Standalone Components
- **TypeScript** con strict mode
- **Tailwind CSS** para estilos
- **Signals** para gestión de estado reactivo
- **Class Bindings** siguiendo mejores prácticas modernas

## 🚀 Desarrollo

### Instalar Dependencias
```bash
pnpm install
```

### Servidor de Desarrollo
```bash
ng serve
# o
pnpm start
```

Navega a `http://localhost:4200/`. La aplicación se recarga automáticamente al modificar archivos.

### Generar Componentes
```bash
ng generate component component-name --standalone --skip-tests
```

### Construir el Proyecto
```bash
ng build
# o para producción
ng build --configuration production
```

## 📱 Estructura del Proyecto

```
src/
├── app/
│   ├── features/
│   │   ├── interfaz-page/          # Página principal
│   │   └── heuristica/
│   |       └── components/
│   |           └── header-heuristica/   # Componente de encabezado
│   │       ├── h1-page/            # Heurística 1: Visibilidad del Estado
│   |           └── components/
│   |               └── heuristica-bueno/   # Ejemplo aplicado heuristica
│   |               └── heuristica-mala/   # Ejemplo sin aplicar heuristica
│   │       ├── h2page/             # Heurística 2: Correspondencia
│   │       ├── h3page/             # Heurística 3: Control y Libertad
│   │       ├── ...                 # Heurísticas 4-10
│   │       └── heuristica.routes.ts # Rutas de las heurísticas
```

## Características Técnicas

### Arquitectura Moderna
- **Standalone Components**: Sin NgModules
- **Signals**: Estado reactivo nativo de Angular
- **Class Bindings**: En lugar de ngClass para mejor rendimiento
- **Lazy Loading**: Carga bajo demanda de rutas

### Responsive Design
- **Grid CSS**: Layout adaptativo para desktop y móvil
- **Comparación Side-by-Side**: En pantallas grandes
- **Stacking Vertical**: En dispositivos móviles

### Mejores Prácticas
- **OnPush Change Detection**: Optimización de rendimiento
- **TypeScript Strict**: Tipado estricto
- **CSS Personalizado**: Clases semánticas reutilizables

## Navegación

### Rutas Principales
- `/` - Página de inicio
- `/heuristica/visibilidad-estado-sistema` - Heurística 1
- `/heuristica/correspondencia-mundo-real` - Heurística 2
- `/heuristica/control-libertad-usuario` - Heurística 3
- ... (y así sucesivamente)

### Rutas Alternativas (Compatibilidad)
- `/heuristica/1` → Redirige a `visibilidad-estado-sistema`
- `/heuristica/2` → Redirige a `correspondencia-mundo-real`
- etc.

## Despliegue en GitHub Pages

Para desplegar la aplicación en GitHub Pages, sigue estos pasos:

### 1. Configuración Inicial (Solo la primera vez)
```bash
# Instalar angular-cli-ghpages
pnpm ng add angular-cli-ghpages
```

### 2. Proceso de Despliegue
```bash
# 1. Construir para producción
pnpm ng build --configuration production

# 2. Desplegar a GitHub Pages
pnpm exec angular-cli-ghpages --dir=dist/02-ui-componentes/browser
```

### 3. Script Automatizado (Opcional)
Puedes agregar este script en `package.json`:
```json
{
  "scripts": {
    "deploy": "ng build --configuration production && npx angular-cli-ghpages --dir=dist/02-ui-componentes/browser"
  }
}
```

Y ejecutar:
```bash
pnpm run deploy
```

### 4. Verificar Despliegue
- Tu aplicación estará disponible en: `https://pablot18.github.io/icc-ppw-heuristicas/`
- GitHub Actions procesará el despliegue automáticamente
- Verifica en la pestaña **Settings → Pages** de tu repositorio

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-heuristica`)
3. Commit tus cambios (`git commit -m 'Add: nueva heurística'`)
4. Push a la rama (`git push origin feature/nueva-heuristica`)
5. Abre un Pull Request

##  Recursos Adicionales

- Repositorio sobre material de frmeawokrs. Repositorio colaborativo de la asignatura Programación y Plataformas Web. [icc-ppw-frameworks-web](https://github.com/PabloT18/icc-ppw-frameworks-web)
- GIST: [Programación y Plataformas Web Conceptos Clave](https://gist.github.com/PabloT18/d06b0843d8659dcf990d2c2b902231a9)
- GIST [Guía de Configuración y Atajos – Angular v20](https://gist.github.com/PabloT18/efa4daa60d4782967187ce34cfe5771a)

Extras
- [10 Heurísticas de Usabilidad de Nielsen](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Angular Documentation](https://angular.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Angular CLI Reference](https://angular.dev/tools/cli)

##  Licencia

Este proyecto es de uso educativo para la materia de Programación Web.
