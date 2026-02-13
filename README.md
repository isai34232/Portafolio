# Portfolio - Jaciel Isai Hernandez

Portafolio profesional desarrollado con Angular basado en diseño de Pencil.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 📱 Compatible con dispositivos móviles
- 🎨 Tema oscuro profesional
- 📧 Formulario de contacto funcional
- 🚀 Optimizado para rendimiento
- ⚡ Carga rápida

## 📋 Secciones

1. **Header** - Navegación principal
2. **Hero** - Presentación personal
3. **About** - Información sobre mí
4. **Projects** - Portafolio de proyectos
5. **CTA** - Llamada a la acción
6. **Contact** - Formulario de contacto
7. **Footer** - Pie de página con Enlaces sociales

## 🛠️ Tecnologías Utilizadas

- Angular 17
- TypeScript
- CSS3
- Reactive Forms
- RxJS

## 📦 Instalación

### Requisitos previos
- Node.js (v18 o superior)
- npm o yarn
- Angular CLI

### Pasos

1. Clonar o descargar el proyecto
```bash
cd pagina
```

2. Instalar dependencias
```bash
npm install
# o
yarn install
```

3. Ejecutar en desarrollo
```bash
npm start
# o
ng serve
```

4. Abrir en navegador
```
http://localhost:4200
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── projects/
│   │   ├── cta/
│   │   ├── contact/
│   │   └── footer/
│   ├── services/
│   │   └── contact.service.ts
│   ├── app.component.ts
│   └── app.module.ts
├── environments/
├── styles/
│   └── global.css
├── assets/
│   └── images/
├── index.html
└── main.ts
```

## ⚙️ Configuración del Formulario de Contacto

Por defecto, el formulario muestra un mensaje mock. Para integrarlo con un servicio de email:

### Opción 1: EmailJS

1. Registrate en [emailjs.com](https://emailjs.com)
2. Instala EmailJS: `npm install @emailjs/browser`
3. Actualiza `contact.service.ts`:

```typescript
import emailjs from '@emailjs/browser';

// En el constructor
emailjs.init('YOUR_PUBLIC_KEY');

// En sendMessage
sendMessage(data: ContactData): Observable<any> {
  return from(emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data));
}
```

### Opción 2: API Backend

1. Crea tu API en Node.js, Python, etc.
2. Configura la URL en `environment.ts`
3. Actualiza `contact.service.ts` para usar HttpClient

## 🎨 Personalización

### Colores
Los colores están definidos como variables CSS en `src/styles/global.css`:

```css
:root {
  --primary-color: #EF3B36;
  --dark-bg: #0A0A0A;
  --card-bg: #1A1A1A;
  /* ... */
}
```

### Contenido
- Header: `src/app/components/header/header.component.ts`
- Hero: `src/app/components/hero/hero.component.ts`
- Projects: `src/app/components/projects/projects.component.ts`
- Footer: `src/app/components/footer/footer.component.ts`

### Imágenes
Coloca tus imágenes en `src/assets/images/`:
- `hero-image.png` - Imagen del hero
- `about-image.png` - Imagen del about

## 📱 Responsividad

El proyecto incluye breakpoints para:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Build para Producción

```bash
npm run build
# o
ng build --configuration production
```

Los archivos compilados estarán en `dist/portfolio-app/`

## 📧 Contacto

Para más información:
- Email: tu@email.com
- LinkedIn: [Tu LinkedIn](https://linkedin.com)
- GitHub: [Tu GitHub](https://github.com)

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

---

Creado por **Jaciel Isai Hernandez** ❤️
