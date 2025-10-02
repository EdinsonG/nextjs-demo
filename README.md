# Next.js Demo
Este es un proyecto de demostración construido con **Next.js**, que utiliza diversas tecnologías modernas para ofrecer una experiencia de usuario fluida y reactividad. El proyecto incluye características de frontend utilizando **Material-UI** y gestión de formularios con **React Hook Form**.

## Tabla de Contenidos
- [Tecnologías utilizadas](#tecnologías)
- [Funcionalidades principales](#funcionalidades)
- [Dependencias](#dependencias)
- [Instalación](#instalación)
- [Scripts](#scripts)

## Tecnologías utilizadas
- Framework: Next.js 15
- Librerías de UI: Material UI 7, @emotion/react y @emotion/styled
- Formularios: react-hook-form + @hookform/resolvers + yup
- Gestión de estado: Zustand
- Internacionalización: next-intl
- Optimización y utilidades: lodash
- Extras: nextjs-toploader para indicadores de carga, react-mui-sidebar para navegación lateral

## Funcionalidades principales
- Sistema de navegación con sidebar dinámico.
- Formularios controlados con validación avanzada usando react-hook-form y yup.
- Soporte de múltiples idiomas con next-intl.
- Indicadores de carga para mejorar la experiencia de usuario.
- Internacionalización: next-intl
- Estructura modular y escalable, pensada para crecer fácilmente.

## Dependencias
Este proyecto utiliza las siguientes dependencias:

- **next**: Framework de React.
- **react**: Biblioteca de JavaScript para construir interfaces de usuario.
- **@mui/material**: Componentes de interfaz de usuario de Material-UI.
- **@mui/icons-material**: Íconos para componentes de Material-UI.
- **@emotion/styled**: Para creación de componentes estilizados.
- **@emotion/react**: Para estilos CSS en línea.
- **@hookform/resolvers**: Integración de Yup con React Hook Form.
- **react-dom**: Proporciona métodos específicos de DOM de React.
- **react-hook-form**: Para la gestión de formularios en React.
- **yup**: Biblioteca para validación de esquemas.
- **zustand**: Biblioteca para la gestión del estado en aplicaciones React.
- **next-intl**: Soporte de internacionalización.

## Instalación
Para instalar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
   git clone <https://github.com/EdinsonG/nextjs-demo>
   cd nextjs-demo

2. Instala las dependencias:
   npm install

3. Inicia el servidor de desarrollo:
   npm run dev

4. Accede a la aplicación en tu navegador en http://localhost:3000

## Scripts
Este proyecto incluye los siguientes scripts en el archivo package.json:

dev: Inicia el servidor de desarrollo con TurboPack.
build: Compila la aplicación para producción.
start: Inicia la aplicación en producción.
lint: Ejecuta ESLint para verificar errores de linting en el código.