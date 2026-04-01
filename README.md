# GlutenFree Finder

## Descripción

GlutenFree Finder es una plataforma web donde los restaurantes pueden crear su perfil y publicar platos aptos para personas celíacas. Los usuarios pueden explorar restaurantes, consultar sus menús y guardar favoritos.

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt

---

## Modelos de datos

### User
- name
- email
- password
- role (user / restaurant)

### Restaurant
- name
- description
- address
- image
- ownerId

### Dish
- name
- description
- price
- isGlutenFree
- restaurantId

### Favorite
- userId
- restaurantId

---

## Autenticación

La aplicación utiliza JWT para la autenticación de usuarios.

### Endpoints de autenticación

- POST `/api/auth/register` → registro de usuario
- POST `/api/auth/login` → inicio de sesión
- GET `/api/auth/me` → obtener usuario autenticado

---

## Variables de entorno

El proyecto requiere un archivo `.env` con las siguientes variables:

- PORT
- MONGO_URI
- JWT_SECRET
- JWT_EXPIRES_IN

---

## Estado actual

- Backend inicializado
- Conexión a base de datos funcionando
- Modelos creados
- Sistema de autenticación implementado
- Middleware de autenticación y roles implementado

---

## Próximos pasos

- CRUD de restaurantes
- CRUD de platos
- Sistema de favoritos
- Integración con frontend
- Deploy