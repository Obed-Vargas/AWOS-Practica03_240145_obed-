# Práctica 03: Consumo de APIs para Geolocalización

En esta práctica se crea una aplicación web que compare dos APIs de mapas (Google Maps y Leaflet) para visualización de geolocalización, usando Node.js, Express y Tailwind CSS, demostrando los conceptos teóricos y requerimientos tecnológicos para el consumo de APIs de Geolocalización.

## Consideraciones

Esta práctica será desarrollada con estructura de ramitas por cada fase, para ello el estudiante continuará practicando la manipulación de ramas en el contexto de control de versiones y desarrollo colaborativo utilizando Git y GitHub.

## Tabla de Fases

| No. | Descripción | Ponderador | Estatus |
|-----|-------------|------------|---------|
| 1. | Configuración del Proyecto | 3 | ✅ finalizado |
| 2. | Configuración del Servidor | 5 | ✅ finalizado|
| 3. | Configuración de la Librería de Estilos (Tailwind CSS) | X | ✅ finalizado |
| 4. | Creación de Vistas | X  | ✅ finalizado |
| 5. | Implementación de Backend para Consumo GS | X | ✅ finalizado |
| 6. | Configuración del Entorno | X | ✅ finalizado |
| 7. | Pruebas de Ejecución | X | ✅ finalizado |
| 8. | Documentación | X | ✅ finalizado |

---

## Fase 8 — Actividades prácticas y documentación 📚

**Resumen:** En esta fase se consolidan las actividades de aprendizaje, se definen ejercicios prácticos para estudiantes y se prepara la documentación pública (README, .env.example, guía de despliegue). La documentación se ha escrito asumiendo que la **Google Maps API key** está correctamente configurada en `.env` (sustituye la variable por tu clave antes de desplegar).

### 🎯 Objetivos
- Proponer ejercicios que refuercen rendimiento, funcionalidades avanzadas, UX y análisis de datos.
- Definir criterios de evaluación claros y reproducibles.
- Instruir sobre cómo compartir y desplegar la práctica públicamente sin exponer credenciales.

### 🧪 Actividades de Práctica (Ejercicios)
- **Ejercicio 1 — Comparación de Rendimiento**
  1. Medir tiempo de carga (Network / Lighthouse) para Google Maps y Leaflet.
  2. Comparar uso de memoria y recursos (DevTools → Performance / Memory).
  3. Probar en dispositivos móviles y distintas redes.

- **Ejercicio 2 — Funcionalidades Avanzadas**
  1. Agregar rutas entre puntos (directions / routing plugin en Leaflet).
  2. Implementar tipo de mapas (satélite, relieve) y conmutador de capas.
  3. Añadir heatmaps o clustering de marcadores.

- **Ejercicio 3 — Mejoras de UX**
  1. Autocompletado en búsqueda (Places Autocomplete o Algolia).
  2. Historial local de búsquedas (localStorage) y exportación/importación.
  3. Sistema de favoritos con persistencia (local o backend simple).

- **Ejercicio 4 — Análisis de Datos**
  1. Calcular distancias entre marcadores (Haversine).
  2. Mostrar áreas de cobertura (polígonos / buffers).
  3. Exportar marcadores a JSON/CSV y permitir descarga.

### 📝 Evaluación (criterios y ponderación)
- Funcionalidad (40%): Ambas implementaciones (Google Maps / Leaflet) operan correctamente.
- Comparativa (30%): Se demuestran diferencias claras en características y limitaciones.
- Interfaz (20%): Diseño responsive y buen uso de Tailwind CSS.
- Código (10%): Código organizado, comentado y limpio.

### 🚀 Compartir y desplegar (opciones rápidas)
- **GitHub**: Repositorio público + `README.md` claro + `LICENSE` (recomiendo MIT).
- **Sitio estático / Demo**: GitHub Pages (documentación o demo estático).
- **App completa (Node.js)**: Render, Railway o Vercel (configura variables de entorno: `GOOGLE_MAPS_API_KEY`, `PORT`).

> Nota: Nunca subas tu `.env` con claves reales. Incluye siempre un `.env.example` sin valores.

### ▶️ Ejecutar localmente (rápido)
```bash
git clone <tu-repo>
cd tu-proyecto
npm install
# Compilar Tailwind
npm run build:css
# Modo desarrollo (recarga automática)
npm run dev
# O ejecutar en producción
npm start
```

Crea un archivo `.env` con la clave (ejemplo):
```
PORT=40145
GOOGLE_MAPS_API_KEY=TU_CLAVE_DE_GOOGLE_MAPS_AQUI
NODE_ENV=development
```

### 📁 Archivos recomendados
- `.env.example` — variables sin valores reales.
- `.gitignore` — incluir `node_modules/` y `.env`.
- `README.md` — instrucciones, demo y badges.

### 🔗 Recursos y referencias
- Google Maps JavaScript API
- Leaflet.js
- OpenStreetMap Nominatim
- Tailwind CSS

---

## Releases

No releases published

## Packages

No packages published

---

**Autor:** Obed Vargas — Material creado como práctica educativa.

**Licencia:** MIT — libre para uso educativo (no comercial sin permiso).
