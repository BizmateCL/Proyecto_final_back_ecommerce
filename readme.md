# Proyecto API backend - Backend de Autenticación y Productos (Leggins)

Este proyecto es una aplicación backend que administra la autenticación y autorización de usuarios, así como la gestión de productos "Leggins" basado en los productos trabajados en clases. Se desarrolló utilizando Node.js, Express, MongoDB (con Mongoose) y JWT para la seguridad. El despliegue se realizó en Railway y la base de datos se aloja en MongoDB Atlas Cloud ( en una primera etapa se trabajo a nivel local y posteriormente se trabajo en MongoDB Atlas Cloud).

## Tecnologías utilizadas

- Node.js & Express
- MongoDB & Mongoose
- JWT (JSON Web Tokens)
- Railway (deploy)
- MongoDB Atlas
- Tailwin CSS VITE
- Middleware de Express js cookie parser 1.4.7

Esto facilita acceder y manipular cookies en tus endpoints.

## Estructura

El proyecto está organizado en carpetas para controladores, middleware, modelos y rutas.

## Funcionalidades principales

- Registro e inicio de sesión de usuarios con autenticación JWT.
- CRUD de productos tipo Leggins y  Usuarios
- Seguridad y autorización en endpoints protegidos en usuarios (login, verificacion y actualizacion de usuario en el cual se requiere token y id de usuario ).

## Endpoints principales


### Endpoints de producto deportivo Leggin

| Descripción                  | Método | Endpoint                                                                 | Caso de uso                                                                                   |
|----------------------------|--------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Crear un producto          | POST   | `https://proyectofinalbackecommerce-proyecto-7.up.railway.app/api/leggins/create`                                                                                                   | Agregar un nuevo leggin al catálogo.                                                         |
| Leer todos los productos   | GET    | `https://proyectofinalbackecommerce-proyecto-7.up.railway.app/api/leggins`                                                           | Ver todos los leggins disponibles.                                                          |
| Leer un producto específico(leggin negro underarmor)| GET    | `https://proyectofinalbackecommerce-proyecto-7.up.railway.app/api/leggins/687d7f058de11600179b9bb8`                                                       | Ver detalles de un leggin por su ID.                                                         |
| Actualizar un producto leggin     | PUT    | `https://proyectofinalbackecommerce-proyecto-7.up.railway.app/api/leggins/id `                                                       | Actualizar nombre o precio de un leggin.                                                     |
| Eliminar un producto leggin      | DELETE | `https://proyectofinalbackecommerce-proyecto-7.up.railway.app/api/leggins/id `                                                       | Eliminar un leggin del catálogo.                                                             |

Nota: ID de ejemplo leggin underarmor 687d7f058de11600179b9bb8
### Endpoints de Usuario

| Descripción                | Método | Endpoint                                                                 | Caso de uso                                                                                   |
|----------------------------|--------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Registrar un usuario       | POST   | `https://proyectofinalbackecommerce-proyecto-7.up.railway.app/api/users/create`                                                      | Registrarse en la plataforma.                                                                |
| Iniciar sesión/login             | POST   | `https://proyectofinalbackecommerce-proyecto-7.up.railway.app/api/users/login`                                                       | Iniciar sesión y obtener token.                                                              |
| Verificar token            | GET    | `https://proyectofinalbackecommerce-proyecto-7.up.railway.app/api/users/verify-user`                                                 | Verificar sesión activa del usuario(considerar bearer y codigo de token).                                                         |
| Actualizar usuario         | PUT    | `https://proyectofinalbackecommerce-proyecto-7.up.railway.app/api/users/update-user/id`                                             | Actualizar información de perfil (considerar bearer y codigo de token).                                                            |


### Instalacion cookie parser

Para el desarrollo de este proyeto se trabaja con el middleware cookie parser,  para leer y manipular las cookies enviadas por el cliente en las solicitudes HTTP, lo que facilita la autenticación y seguridad de la web.
Comando:
``` npm install cookie parser ```


Nota: A continuacion se presenta el listado de productos que se crearon en la base de datos:

Base de datos de productos: Leggins(Formato JSON)

{
  "name":"Calzas Blancas",
  "price":25000,
  "description": "Calzas Blancas",
  "img": "https://i.postimg.cc/2Sk2YjdR/leggin-blanco-negro.jpg",
  "priceID": "20",
  "slug": "calzas-blancas",
  "idProd": "2000500",
  "currency": "clp"
}
{
  "name":"Calzas Naranjo Negro",
  "price":28000,
  "description": "Calzas Naranjo con negro",
  "img": "https://i.postimg.cc/Wp0nJqXc/leggin-multicolor-gris-naranja.jpg",
  "priceID": "21",
  "slug": "calzas-naranjo-con-negro",
  "idProd": "2000501",
  "currency": "clp"
}
{
  "name":"Calzas Verde Negro",
  "price":21000,
  "description": "Calzas Verde con negro",
  "img": " https://i.postimg.cc/br09X4sw/leggin-negro-verde.jpg",
  "priceID": "22",
  "slug": "calzas-verde-con-negro",
  "idProd": "2000502",
  "currency": "clp"
}
{
  "name":"Calzas Multicolor Marca Generica Negro",
  "price":18000,
  "description": "Calzas Multicolor Marca generica",
  "img": "https://i.postimg.cc/KjhDHmcW/leggin-multicolor.jpg",
  "priceID": "23",
  "slug": "calzas-multicolor-marca-generica",
  "idProd": "2000503",
  "currency": "clp"
}
{
  "name":"Calzas Multicolor Valery Store",
  "price":19000,
  "description": "Calzas Multicolor Valery Store",
  "img": " https://i.postimg.cc/gJZKsxpR/leggin-multicolor-2.jpg",
  "priceID": "24",
  "slug": "calzas-multicolor-valery-store",
  "idProd": "2000504",
  "currency": "clp"
}
{
  "name":"Calzas Under Armor color negro",
  "price":35000,
  "description": " Calzas Under Armor color negro ",
  "img": " https://i.postimg.cc/0Qs6gjm7/leggin-negro.jpg",
  "priceID": "25",
  "slug": "calzas-underarmor-color-negro",
  "idProd": "2000505",
  "currency": "clp"
}
