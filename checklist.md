# Checklist proyecto

### Parte 1: Configuración inicial del proyecto

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

- [x] Crear archivo .env.example
- [x] Crear archivo .gitgnore que debe ignorar:
1. node_modules/
2. .env
3. Archivos de logs
4. Archivos del sistema operativo
5. Carpetas de editors (opcional:thunder-tests/)

### 1.6. Base de datos json-server

- [x] Crear archivo src/db/db.json con la estructura de base de datos proporcionada por el profesor
- [x] La base de datos contiene:
1. Colección students con 7 estudiantes
2. Colección courses con 4 cursos
3. Colección enrollments con 4 inscripciones

### 2.0 Funciones de CRUD con funciones JS

- [x] Funcion createStudent(studentData)
- [x] Funcion readAllStudents
- [x] Funcion readStudentById(id)
- [x] Funcion updateStudent(id, studentData)
- [x] Funcion patchStudent(id, partialData)
- [x] Funcion deleteStudent(id)
- [x] Ejecucion de Script

### 3.1 Operaciones CRUD y su respectiva documentacion

- [] Operacion CREATE
- [] Operacion READ ALL
- [] Operacion READ BY ID
- [] Operacion UPDATE
- [] Operacion PATCH
- [] Operacion DELETE

### 4.2 Peticiones Thunder Client

- [] Peticion CREATE Student (POST)
- [] Peticion GET All Students (GET)
- [] Peticion GET Student by ID (GET)
- [] Peticion UPDATE Student (PUT)
- [] Peticion PATCH Student (PATCH)
- [] Peticion DELETE Student (DELETE)

### 5.2 Peticiones REST Client

- [x] Peticion CREATE - Crear estudiante
- [x] Peticion READ - Todos los estudiantes
- [x] Peticion READ - Estudiante por ID
- [x] Peticion READ - Filtrar estudiantes activos
- [x] Peticion READ - Filtrar por nivel
- [x] Peticion UPDATE - Actualizar estudiante completo (PUT)
- [x] Peticion PATCH - Actualizar campo específico
- [x] Peticion DELETE - Eliminar estudiante

### 6. Script de validacion (validate.sh)

- [] Existencia de package.json
- [] Existencia de src/db/db.json
- [] Existencia de .gitignore
- [] Existencia de .env.example
- [] Existencia de README.md
- [] Existencia de checklist.md
- [] Existencia de peticiones-crud.http
- [] Existencia de carpeta src/
- [] Existencia de src/crud-curl.js
- [] Existencia de carpeta images/
- [] Existencia de carpeta scripts/
- [] Verificar en package.json:
1. Que tiene "type": "module"
2. Que dotenv está instalado
3. Que json-server está instalado
4. Que existe script server:up
5. Que existe script crud:curl
- []  Verificar existencia de al menos 6 capturas de Thunder Client en images/
- [] Mostrar mensaje final indicando si pasó o falló la validación

### 8. Tareas de Git 

### 8.1 Repositorio

- [] Creacion de repositorio en Github 
- [] Nombre: manual-http-[tu-nombre]
- [] Añadir al profesor como colaborador

### 8.2 Configuracion local

- [] Inicializar Git en tu proyecto local
- [] Conectar con el repositorio remoto
- [] Crear rama principal main
- [] Subir código inicia

### 8.3 Rama de desarrollo

- [] Crear rama m1/http-request-response
- [] Cambiar a esa rama para trabajar

### 8.4 Commits

- [] Realizar commits incrementales por cada fase del checklist
- [] Los mensajes de commit deben ser descriptivos
- [] Usar convención: feat:, docs:, fix:, etc.

### 8.5 Pull Request

- [] Subir la rama al repositorio remoto
- [] Crear Pull Request desde m1/http-request-response hacia main
- [] Título del PR: "Entrega M1/http-request-response"
- [] Descripción detallada del PR que incluya:
1. Resumen de lo implementado
2. División del trabajo (si es en pareja)
3. Dificultades encontradas y soluciones
4. Características completadas
- [] Asignar al profesor como reviewer
- [] Enviar el PR

### 8.6 Después de la aprobación

- [] Una vez el profesor apruebe y haga merge
- [] Actualizar tu rama main local
- [] Crear tag M1/http-request-response
- [] Subir el tag al repositorio remoto

