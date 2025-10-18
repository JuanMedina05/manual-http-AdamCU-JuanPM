#!/bin/bash
echo " Iniciando validación del proyecto Manual HTTP..."

# Funciones auxiliares ------------------------------

check_file() {
  if [ -f "$1" ]; then
    echo " Archivo encontrado: $1"
  else
    echo " Falta archivo: $1"
    VALIDATION_FAILED=true
  fi
}

check_dir() {
  if [ -d "$1" ]; then
    echo " Carpeta OK: $1"
  else
    echo " Falta carpeta: $1"
    VALIDATION_FAILED=true
  fi
}

# ----------------------------------------------------
# Archivos requeridos
echo -e "\n Verificando archivos requeridos..."
check_file "package.json"
check_file "src/db/db.json"
check_file ".gitignore"
check_file ".env.example"
check_file "README.md"
check_file "checklist.md"
check_file "peticiones-crud.http"
check_file "src/crud-curl.js"

# ----------------------------------------------------
#  Carpetas requeridas
echo -e "\n Verificando carpetas requeridas..."
check_dir "src"
check_dir "scripts"
check_dir "images"

# ----------------------------------------------------
#  Verificar contenido del package.json
echo -e "\n Revisando contenido de package.json..."

if grep -q '"type": "module"' package.json; then
  echo " Contiene \"type\": \"module\""
else
  echo " Falta \"type\": \"module\" en package.json"
  VALIDATION_FAILED=true
fi

if grep -q '"dotenv"' package.json; then
  echo " Dependencia dotenv instalada"
else
  echo " Falta dependencia dotenv"
  VALIDATION_FAILED=true
fi

if grep -q '"json-server"' package.json; then
  echo " Dependencia json-server instalada"
else
  echo " Falta dependencia json-server"
  VALIDATION_FAILED=true
fi

if grep -q '"server:up"' package.json; then
  echo " Script server:up existe"
else
  echo " Falta script server:up"
  VALIDATION_FAILED=true
fi

if grep -q '"crud:curl"' package.json; then
  echo " Script crud:curl existe"
else
  echo " Falta script crud:curl"
  VALIDATION_FAILED=true
fi

# ----------------------------------------------------
# Verificar imágenes Thunder Client
echo -e "\n  Verificando capturas en /images/..."
IMAGE_COUNT=$(find images -type f | wc -l)
if [ "$IMAGE_COUNT" -ge 6 ]; then
  echo " Se encontraron $IMAGE_COUNT imágenes en /images/"
else
  echo " Solo hay $IMAGE_COUNT imágenes. Deben haber al menos 6."
  VALIDATION_FAILED=true
fi

# ----------------------------------------------------
# Resultado final
echo -e "\n---------------------------------------"
if [ "$VALIDATION_FAILED" = true ]; then
  echo " VALIDACIÓN FALLIDA: Revisa los errores arriba."
  exit 1
else
  echo " VALIDACIÓN COMPLETA: Todo está correcto."
  exit 0
fi
echo "---------------------------------------"