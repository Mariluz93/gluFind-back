# gluFind

## Descripción

gluFind es un MVP (Minimum Viable Product) de una plataforma web orientada a personas celíacas.

Permite a restaurantes registrarse y publicar platos aptos para celíacos, y a los usuarios explorar opciones, consultar menús y guardar sus restaurantes favoritos.

El objetivo a futuro es evolucionar hacia un marketplace completo de delivery de comida gluten free.

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt

---

## Funcionalidades

### Usuarios

- Registro (user / restaurant)
- Login
- Obtención del usuario autenticado

---

### Restaurantes

- Crear restaurante (solo rol restaurant)
- Obtener listado de restaurantes
- Ver detalle de restaurante
- Editar restaurante (solo propietario)
- Eliminar restaurante (solo propietario)
- Restricción: un usuario solo puede tener un restaurante

---

### Platos

- Crear plato (solo propietario del restaurante)
- Obtener todos los platos
- Obtener platos por restaurante
- Ver detalle de plato
- Editar plato (solo propietario)
- Eliminar plato (solo propietario)

---

### Favoritos

- Añadir restaurante a favoritos (solo user)
- Ver favoritos del usuario autenticado
- Eliminar favorito
- Prevención de duplicados

---

## Autenticación

La aplicación utiliza JWT para la autenticación y autorización de usuarios.

- Middleware de autenticación
- Middleware de control de roles
- Protección de rutas privadas

---

## Endpoints principales

### Auth

- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/me`

---

### Restaurants

- POST `/api/restaurants`
- GET `/api/restaurants`
- GET `/api/restaurants/:id`
- PUT `/api/restaurants/:id`
- DELETE `/api/restaurants/:id`

---

### Dishes

- POST `/api/dishes`
- GET `/api/dishes`
- GET `/api/dishes/restaurant/:restaurantId`
- GET `/api/dishes/:id`
- PUT `/api/dishes/:id`
- DELETE `/api/dishes/:id`

---

### Favorites

- POST `/api/favorites`
- GET `/api/favorites`
- DELETE `/api/favorites/:restaurantId`

---

## Seguridad y validaciones

- Autenticación mediante JWT
- Control de acceso por roles (user / restaurant)
- Protección de recursos por propiedad (owner)
- Validación de datos en backend
- Prevención de duplicados en favoritos
- Control de errores con códigos HTTP:
  - 200 OK
  - 201 Created
  - 400 Bad Request
  - 401 Unauthorized
  - 403 Forbidden
  - 404 Not Found
  - 500 Server Error

---

## Próximos pasos

- Desarrollo del frontend en React
- Integración completa frontend-backend
- Feedback visual (loading, errores, éxito)
- Diseño responsive básico
- Deploy

### Futuras mejoras

- Sistema de pedidos
- Carrito de compra
- Pagos
- Reviews
- Geolocalización / mapa