# 📁 Estructura del Proyecto Angular

```
pagina/
├── 📄 angular.json                # Configuración de Angular CLI
├── 📄 package.json                # Dependencias del proyecto
├── 📄 tsconfig.json               # Configuración TypeScript
├── 📄 tsconfig.app.json           # TypeScript app específico
├── 📄 .gitignore                  # Git ignore
├── 📄 README.md                   # Documentación principal
├── 📄 INSTRUCCIONES.md            # Guía de inicio rápido
├── 📄 ESTRUCTURA.md               # Este archivo
│
├── 📁 src/                        # Código fuente
│   ├── 📄 main.ts                 # Punto de entrada
│   ├── 📄 index.html              # HTML principal
│   ├── 📄 polyfills.ts            # Polyfills
│   │
│   ├── 📁 app/                    # Aplicación Angular
│   │   ├── 📄 app.module.ts       # Módulo raíz
│   │   ├── 📄 app.component.ts    # Componente raíz
│   │   ├── 📄 app.component.html
│   │   ├── 📄 app.component.css
│   │   │
│   │   ├── 📁 components/         # Componentes reutilizables
│   │   │   ├── 📁 header/
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   │   └── header.component.css
│   │   │   │
│   │   │   ├── 📁 hero/
│   │   │   │   ├── hero.component.ts
│   │   │   │   ├── hero.component.html
│   │   │   │   └── hero.component.css
│   │   │   │
│   │   │   ├── 📁 about/
│   │   │   │   ├── about.component.ts
│   │   │   │   ├── about.component.html
│   │   │   │   └── about.component.css
│   │   │   │
│   │   │   ├── 📁 projects/
│   │   │   │   ├── projects.component.ts
│   │   │   │   ├── projects.component.html
│   │   │   │   └── projects.component.css
│   │   │   │
│   │   │   ├── 📁 cta/            # Call To Action
│   │   │   │   ├── cta.component.ts
│   │   │   │   ├── cta.component.html
│   │   │   │   └── cta.component.css
│   │   │   │
│   │   │   ├── 📁 contact/
│   │   │   │   ├── contact.component.ts
│   │   │   │   ├── contact.component.html
│   │   │   │   └── contact.component.css
│   │   │   │
│   │   │   └── 📁 footer/
│   │   │       ├── footer.component.ts
│   │   │       ├── footer.component.html
│   │   │       └── footer.component.css
│   │   │
│   │   └── 📁 services/           # Servicios
│   │       └── contact.service.ts  # Servicio de contacto
│   │
│   ├── 📁 environments/           # Configuración por entorno
│   │   ├── environment.ts         # Desarrollo
│   │   └── environment.prod.ts    # Producción
│   │
│   ├── 📁 assets/                 # Archivos estáticos
│   │   └── 📁 images/             # Imágenes (agregar tuyas aquí)
│   │       ├── hero-image.png     # (falta agregar)
│   │       └── about-image.png    # (falta agregar)
│   │
│   └── 📁 styles/                 # Estilos globales
│       └── global.css             # Estilos CSS globales
│
├── 📁 dist/                       # (generado al hacer build)
│   └── portfolio-app/
│
└── 📁 node_modules/               # (generado al hacer npm install)
```

## 📂 Descripción rápida

### Archivos principales:
- **angular.json**: Configuración del proyecto y builder
- **package.json**: Dependencias npm
- **tsconfig.json**: Configuración de TypeScript
- **src/main.ts**: Punto de entrada de la aplicación

### Carpetas importantes:
- **src/app/components/**: Todos los componentes visuales
- **src/app/services/**: Lógica compartida (contacto, etc)
- **src/styles/**: Estilos globales
- **src/assets/**: Imágenes y recursos estáticos

### Componentes creados:
1. **header**: Navegación superior
2. **hero**: Sección de bienvenida
3. **about**: Información personal
4. **projects**: Portafolio de proyectos
5. **cta**: Llamada a la acción
6. **contact**: Formulario de contacto
7. **footer**: Pie de página

## 🔄 Flujo de la aplicación

```
main.ts
  ↓
app.module.ts (declara componentes)
  ↓
app.component.html (estructura principal)
  ↓
Componentes individuales:
  header → hero → about → projects → cta → contact → footer
```

## 📁 Dónde agregar contenido

| Qué | Dónde | Archivo |
|-----|-------|---------|
| **Logos/Fotos** | `src/assets/images/` | Tu archivo.png |
| **Textos/Títulos** | `src/app/components/*/...component.ts` | El componente |
| **Colores** | `src/styles/global.css` | :root variables |
| **Estilos personalizados** | `src/app/components/*/...component.css` | CSS del componente |

## 🚀 Nota importante

Necesitas agregar dos imágenes en `src/assets/images/`:
- `hero-image.png` (para la sección hero)
- `about-image.png` (para la sección about)

Sin estas imágenes, verás errores 404 en la consola (pero la página funciona igual).
