# API de Gestión de Tareas

## Descripción

API REST desarrollada con NestJS y TypeScript para gestionar tareas. Permite crear, consultar, actualizar y eliminar tareas, así como buscar tareas por texto y validar los datos recibidos.

El proyecto utiliza una base de datos SQLite para almacenar las tareas y Swagger para documentar y probar los endpoints de la API.

## Tecnologías utilizadas

- **Node.js** — entorno de ejecución.
- **NestJS** — framework para desarrollar la API.
- **TypeScript** — lenguaje de programación.
- **TypeORM** — integración con la base de datos.
- **SQLite** — almacenamiento de datos.
- **Swagger** — documentación interactiva de la API.
- **class-validator** — validación de los datos recibidos.
- **Git y GitHub** — control de versiones.

## Funcionalidades

- Crear tareas.
- Consultar todas las tareas y consultar una tarea por su ID.
- Actualizar tareas.
- Eliminar tareas.
- Buscar tareas por texto.
- Validar los datos de entrada.
- Gestionar errores, como las tareas que no existen.
- Documentar y probar los endpoints mediante Swagger.

## Requisitos previos

- Node.js y npm instalados.

## Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone URL_DE_TU_REPOSITORIO
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd mi-api-nest
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor en modo desarrollo:

   ```bash
   npm run start:dev
   ```

5. Abre la documentación interactiva de Swagger en el navegador:

   `http://localhost:3000/api`

## Base de datos

El proyecto utiliza SQLite y TypeORM para almacenar y consultar las tareas. La entidad Task define los campos de cada tarea, y el repositorio permite realizar operaciones sobre la base de datos.

## Endpoints principales

| Método HTTP | Endpoint | Descripción |
|---|---|---|
| GET | `/tasks` | Consultar tareas |
| GET | `/tasks/:id` | Consultar una tarea por ID |
| POST | `/tasks` | Crear una tarea |
| PATCH | `/tasks/:id` | Actualizar una tarea |
| DELETE | `/tasks/:id` | Eliminar una tarea |
| GET | `/tasks/search?q=texto` | Buscar tareas |

## Objetivo del proyecto

Proyecto desarrollado como parte de mi formación en desarrollo Full Stack, con el objetivo de practicar la creación de APIs REST, la validación de datos, la persistencia con bases de datos y la documentación de servicios backend.
