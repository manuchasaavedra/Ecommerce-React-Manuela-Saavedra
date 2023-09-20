# Indolfo Almacen 

Indolfo Almacen es un ecommerce que ofrece distintas comidas para disfrutar en tus festejos y momentos especiales. 

### Contenidos
·	Descripcion
·	Caracteristicas
·	Requisitos
· 	Instalacion
·	Uso
·	Demo
·	Licencia

### Descripción
El proyecto esta creado con la biblioteca React, utilizando 
react-script como herramienta de compilacion. Los estilos provienen de bootstrap y CSS. Todos los enlaces se crean con react-router-dom. 

### Caracteristicas
· Catalogo de tortas, picadas y entradas.
·	Detalle de productos, con contador y boton añadir al carrito.
· Filtros para productos por categoria
· Carrito de compra
· Formulario de contacto
· Generacion de pedidos y gestion de productos en Firebase

### Requisitos
Antes de comenzar a trabajar en este proyecto, asegúrate de cumplir con los siguientes requisitos:
· Node.js y npm: Debes tener Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
· Git: Se recomienda tener Git instalado para gestionar el control de versiones de tu proyecto. Puedes descargarlo desde [git-scm.com](https://git-scm.com/).

### Instalacion
Para instalar y ejecutar la aplicacion:
1. Clona el siguiente repositorio en tu consola local utilizando Git: `git clone `
2. Navega al directorio del proyecto: `cd ecommerce`
3. Instala las dependencias del proyecto utilizando npm: `npm install`
4. Inicia la aplicacion: `npm start`. La aplicacion se encontrara disponible en el localHost de tu navegador web.

### Uso
La seccion principal de la página muestra una lista de todos los productos que Indolfo Almacen ofrece. Cuenta ademas con una barra de navegacion donde se pueden filtrar los productos por categorias: **Picadas** - **Tortas** - **Entradas**, inclute ademas el logo de la empresa que al clickearlo desde cualquier lugar del proyecto, te redirige a la pagina principal.  
Al hacer click en *Ver Detalles* no redirige a una nueva pagina donde se observa una imagen, el nombre, la descripcion, el precio y un itemCount que permite incrementar o decrementar la cantidad de productos que agregamos al darle click a *Añadir al Carrito*. 
Al añadir productos al carrito, se activa el icono cart con un badge que contiene la cantidad de productos que tiene nuestro carrito, al clickearlo ingresamos en una nueva pagina que nos muestra el contenido del carrito:
| Nombre | Cantidad | Precio Unitario | Subtotal | 
y tiene los botones de *Vaciar Carrito* y de *Finalizar Compra*.
Al hacer click en este ultimo, te redirige a una nueva pagina donde hay un formulario de contacto que completar y un boton *Comprar* que se activa cuando los datos estan completos. Al **Comprar** llegamos a una ultima pagina con un mensaje de agradecimiento, el id de la compra y un boton para volver al inicio.

### Demo
(https://youtu.be/6DNfNigbONg)

### Licencia
Este es un proyecto con fines educativos, por lo que no tiene funcionalidad comercial ni ofrece datos sensibles. Todos los productos son ficticios.


