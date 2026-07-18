// Yukly Store - Configuration
// Este archivo centraliza la configuración para asegurar compatibilidad con GitHub Pages

// Detectar la ruta base del sitio
const BASE_PATH = (() => {
  const url = window.location.pathname;
  // Si está en GitHub Pages con estructura /usuario/repo/, extraer el repo
  if (url.includes('Example-commerce-2')) {
    return '/Example-commerce-2';
  }
  return '';
})();

// Función para obtener la ruta correcta a un archivo
function getPath(filename) {
  return `${BASE_PATH}/${filename}`;
}

// Función para navegar manteniendo la base path
function navigateTo(filename, params = '') {
  window.location.href = getPath(filename) + params;
}
