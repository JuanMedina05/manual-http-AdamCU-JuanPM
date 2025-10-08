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
function readAllStudents(id) {
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

//EJECUCION de SCRIPT 
//Mensaje de iniciacion de ejecucion de scripts
console.log("Generando comandos cURL CRUD\n");

//Ejecucion de funcion CREATE
createStudent({
    name: "Nuevo Estudiante",
    email: "nuevo@email.com",
    enrollmentDate: "2024-10-07",
    active: true,
    level: "beginner"
});

//Ejecucion de funcion READ ALL
readAllStudents();

//Ejecucion de funcion READ BY
readStudentById(1);

//Ejecucion de funcion UPDATE
updateStudent(2, {
    name: "Juan Martínez Vílchez",
    email: "juanmarvil@email.com",
    enrollmentDate: "2024-10-01",
    active: true,
    level: "intermediate"
});

//Ejecucion de funcion PATCH 
patchStudent(3, { active: false});

//Ejecucion de funcion DELETE
deleteStudent(7);

//Mensaje de finalizacion de ejecucion de scripts 
console.log("Comandos generados con exito");