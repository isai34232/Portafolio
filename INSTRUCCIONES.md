# 🚀 INICIO RÁPIDO - Portfolio Angular

## Pasos para ejecutar el proyecto:

### 1️⃣ Instalar dependencias
```powershell
cd "c:\Users\leica\OneDrive\Documentos\Mi perfil\pagina"
npm install
```

### 2️⃣ Ejecutar en desarrollo
```powershell
npm start
```

O usa Angular CLI directamente:
```powershell
ng serve --open
```

El navegador se abrirá automáticamente en `http://localhost:4200`

### 3️⃣ Compilar para producción
```powershell
npm run build
```

## 📁 Estructura de componentes

Cada componente tiene 3 archivos:
- `.ts` - Lógica TypeScript
- `.html` - Template
- `.css` - Estilos

## 🎨 Personalización

### Cambiar el contenido:
1. **Nombres y textos**: Edita los archivos `.ts` de cada componente
2. **Colores**: Modifica `src/styles/global.css`
3. **Imágenes**: Coloca las tuyas en `src/assets/images/`

### Añadir imágenes:
Necesitas las siguientes imágenes en `src/assets/images/`:
- `hero-image.png` (500x500px recomendado)
- `about-image.png` (450x450px recomendado)

## 📧 Formulario de contacto

Actualmente usa un mock. Para integrarlo:

**Opción 1 - EmailJS (Recomendado)**
```bash
npm install @emailjs/browser
```
Luego edita `src/app/services/contact.service.ts`

**Opción 2 - Backend propio**
- Configura tu API en `src/environments/environment.ts`

## 🔗 Enlaces importantes

- Angular Docs: https://angular.io/docs
- TypeScript: https://www.typescriptlang.org/
- Reactive Forms: https://angular.io/guide/reactive-forms

## ⚠️ Requisitos

- Node.js v18+ (https://nodejs.org/)
- npm (incluido con Node.js)

## 💡 Consejos

1. Usa `ng serve --open` para depuración
2. Abre DevTools (F12) para ver la consola
3. Los cambios se guardan automáticamente en dev
4. Revisa los errores en la consola si algo no funciona

## 📞 Soporte

Si tienes dudas sobre Angular, consulta:
- Angular.io
- Stack Overflow
- Comunidad Angular

---

¡Disfruta tu portafolio! 🎉
