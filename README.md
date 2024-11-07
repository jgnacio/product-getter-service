# Gestión de Productos en Caché - ASLAN InterConnect-Platform

Este proyecto proporciona una API para gestionar la caché de productos, permitiendo operaciones de consulta sobre productos almacenados en caché basadas en SKU, número de parte, categoría y proveedor. La API está desarrollada con Express.js y TypeScript, e integra Prisma para la gestión de la base de datos.

## Características

Consultas de productos en caché por SKU, número de parte, categoría y proveedor.
Gestión de caché de productos para mejorar el rendimiento y reducir las consultas a la base de datos.
Rutas y controladores modulares para facilitar la escalabilidad.

## Instalacion

### Requisitos

- Node.js v14 o superior
- npm v6 o superior

### Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
```

### Instala las dependencias del proyecto:

```bash
npm i
```

Crea un archivo .env en la raíz del proyecto para definir las variables de entorno necesarias. Un ejemplo de configuración podría incluir:

```plaintext
DATABASE_URL="postgresql://usuario:password@localhost:5432/base_de_datos"
PORT=3000
```

### Configura Prisma ejecutando la migración inicial:

```bash
npx prisma migrate dev --name init
```

Y ahora con todo configurado esta listo para poder usar.

## Uso

### Comandos disponibles

`npm run build`: Compila el código TypeScript y lo genera en la carpeta lib.
`npm start`: Inicia el servidor en producción desde la carpeta lib generada por TypeScript.
`npm run dev`: Ejecuta el servidor en modo de desarrollo usando nodemon, lo que permite la recarga automática.
`npm test`: Ejecuta las pruebas configuradas con Jest en un entorno Node.js.
