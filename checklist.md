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

- [] Crear archivo .env con las siguientes variables:
1. PORT (valor:4000)
2. API_BASE_URL (valor: http//localhost)
3. NODE_ENV (valor:development)

- [] Crear archivo .env.example
- [] Crear archivo .gitgnore que debe ignorar: