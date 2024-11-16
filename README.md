# Proyecto React con Vite y TypeScript - Carga de Productos

Este proyecto es una aplicación web desarrollada con **React**, **TypeScript** y empaquetada con **Vite**. La aplicación permite a los usuarios agregar productos mediante un formulario y mostrarlos en un menú interactivo.

---

## Características

- **Formulario dinámico:** Permite agregar productos con nombre, imagen (URL) y precio.
- **Visualización interactiva:** Los productos se muestran en tarjetas que incluyen imagen, nombre y precio.
- **Hooks personalizados:** Uso de un hook reutilizable para manejar la lógica del formulario.

---

## Tecnologías Utilizadas

- **Vite**: Herramienta de desarrollo rápida para aplicaciones web modernas.
- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.

---

## Estructura del proyecto
```markdown
proyectoReact-TS/
├── public/
├── src/
│   ├── assets/                # Recursos estáticos
│   ├── components/            # Componentes React
│   │   ├── AppProduct/        # Visualización de productos
│   │   ├── ComponentUseEffect # Ejemplo con useEffect
│   │   ├── FormComponent/     # Formulario de productos
│   │   ├── MiPrimerComponente # Componente introductorio
│   ├── hooks/                 # Hooks personalizados
│   │   └── useForm.ts         # Hook para formularios
│   ├── App.tsx                # Componente principal
```

## Descripcion de Componentes

**FormComponent**: Componente que incluye un formulario para agregar productos.

**AppProduct**: Muestra una lista de productos en tarjetas.

**useForm**: Hook personalizado para manejar la lógica del formulario.

## Instalación y Ejecucion del Proyecto

1. **Clonar el repositorio:**

   ```bash
   git clone <url-del-repositorio>
   cd proyectoReact-TS
2. **Instalar dependencias:**
   ```bash
   npm install
3. **Iniciar el servidor de desarollo:**
   ```bash
   npm run dev

El proyecto estará disponible en http://localhost:5173.

## Ejemplo de Uso

Completa el formulario con los detalles de un producto (nombre, URL de la imagen y precio).

Haz clic en "Enviar Producto" para agregarlo al menú.

El producto se mostrará como una tarjeta debajo del formulario.




