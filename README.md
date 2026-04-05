# gluFind - Backend API

## Descripción

gluFind es una API REST desarrollada como MVP (Minimum Viable Product) de una plataforma web orientada a personas celíacas.

Permite a restaurantes registrarse y publicar platos aptos para celíacos, y a los usuarios explorar opciones, consultar menús y guardar sus restaurantes favoritos.

El objetivo a futuro es evolucionar hacia un marketplace completo de comida gluten free con funcionalidades de pedido y entrega.

---
## Deploy

- API desplegada en producción: https://glufind-back.onrender.com

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt
- CORS

---

## Funcionalidades

### Autenticación

- Registro (user / restaurant)
- Login
- Obtención del usuario autenticado

---

### Restaurantes

- Crear restaurante (solo rol restaurant)
- Obtener listado de restaurantes
- Ver detalle de restaurante
- Editar restaurante (solo propietario)
- Restricción: un usuario solo puede tener un restaurante

---

### Platos

- Crear plato (solo propietario del restaurante)
- Obtener platos por restaurante
- Editar plato (solo propietario)
- Eliminar plato (solo propietario)

---

### Favoritos

- Añadir restaurante a favoritos (solo user)
- Ver favoritos del usuario autenticado
- Eliminar favorito (solo user)
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

## Estructura del proyecto

src/
│
├── config/
|  └── db.js
├── controllers/
|  ├── authController.js
|  ├── dishController.js
|  ├── favoriteController.js
|  └── restaurantController.js
├── helpers/
|  └── generateToken.js
├── middleware/
|  ├── authMiddleware.js
|  └── roleMiddleware.js
├── models/
|  ├── Dish.js
|  ├── Favorite.js
|  ├──Restauran.js
|  └── User.js
├── routes/
|  ├── authRoutes.js
|  ├── dishRoutes.js
|  ├── favoriteRoutes.js
|  ├── restauranRoutes.js
|  └── indexRoutes.js
└── index.js


---

## Instalación en local

1. Clonar el repositorio:

git clone https://github.com/Mariluz93/gluFind-back

2. Instalar dependencias:

npm install

3. Crear archivo .env en la raíz del proyecto:

Añadir las variables de entorno necesarias: MONGO_URI, PORT, JWT_SECRET y JWT:EXPIRES_IN

4. Iniciar el servidor:

npm start

---

### Futuras mejoras

- Implementar tests con Jest y Supertest
- Añadir documentación Swagger para la API
- Subida de imágenes (Cloudinary)
- Sistema de pedidos
- Carrito de compra
- Pagos
- Reviews de usuarios
- Geolocalización / mapa

---

## Estado del proyecto

Proyecto funcional en fase MVP con backend completamente desplegado y conectado al frontend.

---

## Autor

Proyecto desarrollado por María Luz Castro como proyecto final del bootcamp Full Stack Developer en The Bridge.