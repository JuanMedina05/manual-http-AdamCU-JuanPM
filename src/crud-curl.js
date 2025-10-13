// Script que genera los comandos CURL, para realizar los comandos CRUD, sobre sobre la colección "students" del servidor json-server.

//Cargar variables del archivo .env
import { config } from "dotenv";
import { exec } from "child_process";

config();


//Variables de entorno
const PORT = process.env.PORT;
const API_BASE_URL = process.env.API_BASE_URL;
const BASE_URL = `${API_BASE_URL}:${PORT}`;

//Funcion CREATE - Crear nuevo estudiante
export const createStudent = () => {
  const URL_BASE = `${API_URL}/students`;
  const body = JSON.stringify({
    name: "Nuevo Estudiante",
    email: "nuevo.estudiante@email.com",
    enrollmentDate: "2024-10-15",
    active: true,
    level: "beginner"
  });

  const cmd = `curl -X POST ${URL_BASE} -H "Content-Type: application/json" -d '${body}'`;

  console.log("🚀 Ejecutando CREATE (POST)...");

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error ejecutando curl ->", error.message);
      return;
    }
    if (stderr) {
      console.error("⚠️ Error en salida ->", stderr);
    }
    console.log("📦 Resultado del CREATE:");
    console.log(stdout);
  });
};


//Funcion READ AlL - Leer todos los estudiantes 
export const readAllStudents = () => {
  const URL_BASE = `${API_URL}/students`;
  const cmd = `curl -X GET ${URL_BASE}`;

  console.log("📚 Ejecutando READ ALL (GET)...");

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error ejecutando curl ->", error.message);
      return;
    }
    if (stderr) {
      console.error("⚠️ Error en salida ->", stderr);
    }
    console.log("📦 Resultado del READ ALL:");
    console.log(stdout);
  });
};


//Funcion READ BY - Leer un estudiante por su ID
export const readStudentById = (id) => {
  const URL_BASE = `${API_URL}/students/${id}`;
  const cmd = `curl -X GET ${URL_BASE}`;

  console.log(`🔍 Ejecutando READ BY ID (GET) para ID ${id}...`);

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error ejecutando curl ->", error.message);
      return;
    }
    if (stderr) {
      console.error("⚠️ Error en salida ->", stderr);
    }
    console.log(`📦 Resultado del READ BY ID (${id}):`);
    console.log(stdout);
  });
};


//Funcion UPDATE - Actualizar estudiante completo
export const updateStudent = (id) => {
  const URL_BASE = `${API_URL}/students/${id}`;
  const body = JSON.stringify({
    name: "Carlos Rodríguez Martín",
    email: "carlos.rodriguez@email.com",
    enrollmentDate: "2024-10-01",
    active: true,
    level: "intermediate"
  });

  const cmd = `curl -X PUT ${URL_BASE} -H "Content-Type: application/json" -d '${body}'`;

  console.log(`✏️ Ejecutando UPDATE (PUT) para ID ${id}...`);

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error ejecutando curl ->", error.message);
      return;
    }
    if (stderr) {
      console.error("⚠️ Error en salida ->", stderr);
    }
    console.log(`📦 Resultado del UPDATE (${id}):`);
    console.log(stdout);
  });
};
 

//Funcion PATCH - Actulizar un campo del estudiante
export const patchStudent = (id) => {
  const URL_BASE = `${API_URL}/students/${id}`;
  const body = JSON.stringify({
    active: false
  });

  const cmd = `curl -X PATCH ${URL_BASE} -H "Content-Type: application/json" -d '${body}'`;

  console.log(`🔧 Ejecutando PATCH (PATCH) para ID ${id}...`);

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error ejecutando curl ->", error.message);
      return;
    }
    if (stderr) {
      console.error("⚠️ Error en salida ->", stderr);
    }
    console.log(`📦 Resultado del PATCH (${id}):`);
    console.log(stdout);
  });
};


//Funcion DELETE - Eliminar un estudiante
export const deleteStudent = (id) => {
  const URL_BASE = `${API_URL}/students/${id}`;
  const cmd = `curl -X DELETE ${URL_BASE}`;

  console.log(`🗑️ Ejecutando DELETE (DELETE) para ID ${id}...`);

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error ejecutando curl ->", error.message);
      return;
    }
    if (stderr) {
      console.error("⚠️ Error en salida ->", stderr);
    }
    console.log(`📦 Resultado del DELETE (${id}):`);
    console.log(stdout);
  });
};


//EJECUCION de SCRIPT 
//Mensaje de iniciacion de ejecucion de scripts
console.log("🚀 INICIANDO DEMO CRUD cURL\n");

createStudent();
setTimeout(() => readAllStudents(), 2000);
setTimeout(() => readStudentById(1), 4000);
setTimeout(() => updateStudent(2), 6000);
setTimeout(() => patchStudent(3), 8000);
setTimeout(() => deleteStudent(7), 10000);

setTimeout(() => {
  console.log("\n✅ CRUD FINALIZADO");
}, 12000);
