// Script que genera los comandos CURL, para realizar los comandos CRUD, sobre sobre la colección "students" del servidor json-server.

//Cargar variables del archivo .env
import dotenv from "dotenv";
dotenv.config();

//Variables de entorno
const PORT = process.env.PORT;
const API_BASE_URL = process.env.API_BASE_URL;
const BASE_URL = `${API_BASE_URL}:${PORT}`;

//Funcion CREATE - Crear nuevo estudiante
function createStudent(studentData) {
    console.log(`
curl -X POST ${BASE_URL}/students \\
        -H "Content-Type: application/json" \\
        -d '${JSON.stringify(studentData,null,2)}'
        `);
}

//Funcion READ AlL - Leer todos los estudiantes 
function readStudentById(id) {
    console.log(`
curl -X GET ${BASE_URL}/students
    `);
}

//Funcion READ BY - Leer un estudiante por su ID
function readStudentById(id){
    console.log(`
curl -X GET ${BASE_URL}/students/${id}
    `);
}

//Funcion UPDATE - Actualizar estudiante completo
function updateStudent(id, studentData){
    console.log(`
curl -X PUT ${BASE_URL}/students/${id} \\
    -H "Content-Type: application/json" \\
    -d '${JSON.stringify(studentData, null, 2)}'
    `);
} 

//Funcion PATCH - Actulizar un campo del estudiante
function patchStudent(id, partialData) {
  console.log(`
curl -X PATCH ${BASE_URL}/students/${id} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(partialData, null, 2)}'
  `);
}

//Funcion DELETE - Eliminar un estudiante
function deleteStudent(id) {
  console.log(`
curl -X DELETE ${BASE_URL}/students/${id}
  `);
}