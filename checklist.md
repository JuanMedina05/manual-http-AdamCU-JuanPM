# Checklist proyecto

## Parte 1: Configuración inicial del proyecto

### 1.1. Inicialización del proyecto

- [x] Crear carpeta del proyecto
- [x] Inicializar proyecto Node.js con npm init
- [x] Completar los datos del proyecto

### 1.2 Instalacion de dependencias

- [x] Instalar json-server como dependencia
- [x] Instalar dotenv como dependencia

### 1.3. Configuración de package.json

- [x] Configurar el proyecto para usar EMS(ES Modules) en lugar de CommonJS
- [x] Añadir los siguientes scripts en package.json:
1. server:up
2. crud:curl
3. validate

### 1.4. Estructura de carpetas

- [x] Crear todas las carpetas según las estructura requerida

### 1.5. Archivos de configuración

- [x] Crear archivo .env con las siguientes variables:
1. PORT (valor:4000)
2. API_BASE_URL (valor: http//localhost)
3. NODE_ENV (valor:development)

- [] Crear archivo .env.example
- [] Crear archivo .gitgnore que debe ignorar:
1. node_modules/
2. .env
3. Archivos de logs
4. Archivos del sistema operativo
5. Carpetas de editors (opcional:thunder-tests/)

### 1.6. Base de datos json-server
- [] Crear archivo src/db/db.json con la estructura de base de datos proporcionada por el profesor
- [] La base de datos contiene:
1. Colección students con 7 estudiantes
2. Colección courses con 4 cursos
3. Colección enrollments con 4 inscripciones

