// Script que genera los comandos CURL, para realizar los comandos CRUD, sobre sobre la colección "students" del servidor json-server.

//Cargar variables del archivo .env
import dotenv from "dotenv";
dotenv.config();

//Variables de entorno
const PORT = process.env.PORT;
const API_BASE_URL = process.env.API_BASE_URL;
const BASE_URL = `${API_BASE_URL}:${PORT}`;

//Comando CREATE - Crear nuevo estudiante
function createStudent(studentData) {
    console.log(`
curl -X POST ${BASE_URL}/students \\
        -H "Content-Type: application/json" \\
        -d '${JSON.stringify(studentData,null,2)}'
        `);
}

//Comando READ AlL - Leer estudiante por su ID
function readStudentById(id) {
    console.log(`
curl -X GET ${BASE_URL}/students
    `);
}
