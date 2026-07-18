# Yukly Store - E-commerce Completo

Una tienda online de peluches y coleccionables premium construida con HTML + CSS + JS vanilla, Firebase v10 y GitHub Pages. Los clientes hacen pedidos directamente por WhatsApp.

## Características

- ✨ **100% Gratuito** - Sin servidor propio, sin pasarela de pagos
- 🎨 **Diseño Bold** - Estética oscura y energética de streetwear
- 📱 **Responsive** - Funcionamiento perfecto en desktop y mobile
- 🔥 **Real-time** - Datos sincronizados con Firestore
- 🔐 **Panel Admin** - Gestión de productos y colecciones protegida
- 💬 **WhatsApp Integration** - Pedidos vía mensaje directo

## Stack Tecnológico

- **Frontend**: HTML5 + CSS3 + JavaScript (vanilla)
- **Backend**: Firebase Firestore + Authentication v10 (desde CDN)
- **Hosting**: GitHub Pages
- **Tipografía**: Google Fonts (Inter + Space Grotesk)
- **Sin dependencias externas** - Sin bundlers, sin node_modules

## Estructura de Archivos

```
index.html           # Tienda pública
collection.html      # Página de colección individual
product.html         # Página de producto individual
admin-login.html     # Login del administrador
admin.html           # Panel administrativo
README.md            # Este archivo
```

## Configuración Inicial

### 1. Crear Proyecto Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto
3. Ve a **Build → Firestore Database**
   - Crea una base de datos en modo de prueba
4. Ve a **Build → Authentication**
   - Habilita el método de autenticación "Email/Password"
5. Ve a **Project Settings** y copia tu configuración:

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};
```

### 2. Reemplazar Configuración Firebase

En cada archivo HTML (index.html, collection.html, product.html, admin-login.html, admin.html), reemplaza los placeholders en la sección `firebaseConfig`:

```javascript
const firebaseConfig = {
  apiKey: "tu_api_key_aqui",
  authDomain: "tu_proyecto.firebaseapp.com",
  projectId: "tu_proyecto_id",
  storageBucket: "tu_proyecto.appspot.com",
  messagingSenderId: "tu_numero",
  appId: "tu_app_id"
};
```

### 3. Configurar Firestore

Crea dos colecciones en Firestore:

#### Colección: `collections`
```javascript
{
  name: "Gatos Plushie",
  description: "Peluches de gatos suaves y adorables",
  image: "https://ejemplo.com/gatos.jpg",
  createdAt: timestamp
}
```

#### Colección: `products`
```javascript
{
  name: "Gatito Amigurumi",
  price: 299,
  stock: 12,
  collectionId: "id_de_coleccion",
  brand: "Yukly Crafts",
  tags: ["amigurumi", "gato", "handmade"],
  description: "Peluche tejido a mano con detalles únicos",
  images: [
    "https://ejemplo.com/imagen1.jpg",
    "https://ejemplo.com/imagen2.jpg"
  ],
  createdAt: timestamp
}
```

### 4. Crear Cuenta Admin

1. En Firebase Console → Authentication
2. Crea un usuario con Email/Password
3. Este será tu cuenta de administrador
4. Accede a `admin-login.html` con estas credenciales

### 5. Configurar Reglas de Firestore

Ve a **Firestore Database → Rules** y reemplaza con:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /collections/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /products/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Desplegar en GitHub Pages

### 1. Inicializar Git (si no está hecho)

```bash
git init
git add .
git commit -m "Inicial: Yukly Store"
```

### 2. Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com/new)
2. Crea un repositorio público
3. Sigue las instrucciones para hacer push

### 3. Habilitar GitHub Pages

1. Ve a tu repositorio → **Settings**
2. Lateral izquierdo → **Pages**
3. Selecciona rama `main` y carpeta `root`
4. Tu sitio estará en `https://tu-usuario.github.io/nombre-repo/`

### 4. Actualizar URLs (si no está en la raíz)

Si tu repo no es `usuario.github.io`, necesitas actualizar las rutas en los archivos HTML. Por ejemplo, si el repo es `my-store`:

Cambia:
```html
<a href="index.html">Inicio</a>
```

Por:
```html
<a href="/my-store/index.html">Inicio</a>
```

## Uso del Panel Admin

### Acceso
- URL: `/admin-login.html`
- Email y password: Los que creaste en Firebase

### Funcionalidades

#### Tab: Productos
- **Stats**: Total de productos, colecciones, agotados, stock bajo
- **Crear**: Botón "+ Nuevo producto"
- **Editar**: Modificar cualquier producto
- **Stock**: Controles +/− para actualizar cantidad en tiempo real
- **Eliminar**: Borrar productos con confirmación

#### Tab: Colecciones
- **Grid**: Visualización en tarjetas
- **Crear**: Botón "+ Nueva colección"
- **Editar**: Cambiar nombre, descripción, imagen
- **Eliminar**: No permite si hay productos asignados

#### Tab: Estadísticas
- **Stock Bajo**: Top 5 productos con stock crítico
- **Distribución**: Cantidad de productos por colección
- **Inventario**: Valor total calculado

## Funcionalidades de la Tienda

### Navegación
- **Navbar Sticky**: Logo, búsqueda, carrito (desktop)
- **Mobile**: Hamburger menu con colecciones dinámicas
- **Breadcrumb**: Navegación clara en detail pages

### Catálogo
- **Filtros**: Por precio y tags en tiempo real
- **Grid Responsivo**: Auto-fill minmax(240px, 1fr)
- **Badges**: Stock bajo, agotado
- **Búsqueda**: En el navbar busca por nombre, marca, descripción

### Carrito
- **Drawer Lateral**: Derecha con borde amarillo neón
- **Persistencia**: localStorage
- **Checkout Modal**: Nombre, teléfono, tipo de entrega
- **WhatsApp**: Mensaje formateado al número +52 656 8596503

### Colecciones
- **Grid Horizontal**: Scrolleable en mobile
- **Detail Page**: Hero con imagen, descripción
- **Productos Filtrados**: Solo de esa colección

### Productos
- **Galería**: Imagen principal + thumbnails
- **Info Completa**: Precio, stock, tags, descripción
- **Productos Relacionados**: De la misma colección + tags en común
- **Cantidad**: Control +/− respetando stock

## Paleta de Colores

```css
--color-black: #0a0a0a        /* Fondo principal */
--color-white: #ffffff        /* Texto sobre negro */
--color-yellow: #FFE600       /* Acento CTAs */
--color-gray: #1a1a1a         /* Cards/superficies */
--color-gray-light: #a0a0a0   /* Texto secundario */
--color-success: #25d366      /* WhatsApp verde */
--color-error: #ff4444        /* Errores */
```

## Tipografía

- **Space Grotesk (700)**: Títulos y UI
- **Inter (400-700)**: Cuerpo de texto

## Performance

- ✅ Carga rápida (solo 5 archivos HTML)
- ✅ Cero compilación - abre en navegador directamente
- ✅ Real-time con Firestore onSnapshot
- ✅ CSS sin frameworks
- ✅ JavaScript vanilla sin bundler

## Consideraciones de Seguridad

- ✅ Firebase Authentication protege admin panel
- ✅ Reglas de Firestore permiten lectura pública, escritura solo autenticada
- ✅ Credenciales de Firebase en client-side es normal para web apps
- ✅ No hay datos sensibles en cliente (transacciones vía WhatsApp)

## Limitaciones Conocidas

- Sin carrito en backend (solo localStorage)
- No hay procesamiento de pagos (cliente decide por WhatsApp)
- Storage limitado a Firestore free tier
- Sin historial de pedidos (todo por WhatsApp)

## Próximos Pasos Opcionales

1. Agregar analytics con Google Analytics
2. Agregar imágenes a Cloud Storage en lugar de URLs externas
3. Integrar email de confirmación
4. Crear dashboard de pedidos
5. Agregar reviews/ratings de clientes
6. Implementar carrito en backend

## Troubleshooting

**Error: "Firebase not initialized"**
- Verifica que firebaseConfig está completo y correcto
- Asegúrate de estar usando Firebase v10 CDN

**Firestore no muestra datos**
- Verifica reglas de Firestore
- Comprueba que collection names son exactos (case-sensitive)

**Imágenes no cargan**
- Usa URLs HTTPS completas
- Verifica CORS en el servidor de imágenes

**Admin no carga**
- Limpia localStorage: `localStorage.clear()`
- Verifica que Authentication está habilitado en Firebase

## Licencia

Libre para usar, modificar y comercializar.

---

**Creado para Yukly Store** - Peluches y Coleccionables Premium
# Yukly Store Complete - Ready for Production
