******README DEL PROYECTO CODERHOUSE COMISION 25460*****


>NOMBRE DEL PROYECTO: "E-commerce del Estudio Jurídico Nolivo - Sansano & Asociados"

>DESCRIPCIÓN: "Proyecto final del curso de ReactJs de CoderHouse, comisión Nº 25460 consistente en crear un e-commerce utilizando las tecnologías enseñadas en el curso."

>INSTALACIÓN Y LIBRERÍAS: El proyecto se realiza sobre una app de ReactJs instalada mediante NodeJs NPM manager. En el mismo se emplean las siguientes tecnologías:
*HTML5
*CSS 3
*BOOTSTRAP 5
*NODEJS V.14.19.0
*NPM V. 8.5.0
*REACTJS Y REACT ROUTER DOM

>ESTRUCTURA DEL PROYECTO: El armado del sitio se realizó utilizando la estructura de componentes implementada por ReactJs, siendo los mismos:

_INDEX.JSX: Índice principal que renderiza la aplicación mediante el método ReactDOM.Render.

_APP.JSX: Contiene la aplicación principal, que realiza el enrutado y el llamado a los componentes contenedores y navbar.

_ITEMLISTCONTAINER.JSX: Componente contenedor que renderiza un saludo en pantalla como título del sitio y llama al listado de ítems.

_ITEMLIST.JS: Componente que realiza un async-mock para simular el llamado a una API, y siendo la respuesta positiva renderiza varias instancias del componente ITEM.JS.

_ITEM.JS: Contiene el elemento a renderizar, en forma de tarjeta-card de bootstrap, mostrando la información recibida en los parámetros.

_GETFETCH.JS: Se compone de un array de objetos que es exportado en la constante productos, para luego ser pasado como respuesta a los diversos llamados que realizan los demás componentes mediante la promesa getfetch, que es exportada por defecto.

_ITEMCOUNT.JSX: Componente que renderiza un contador interactivo para permitir al usuario agregar o sustraer productos de un carro de compras.

_CART.JSX: Componente que contiene al carro de compras - en desarrollo.

_ITEMDETAILCONTAINER.JSX: Componente que por medio de un hook de UseEffect, renderiza una instancia del componente ItemDetail cada vez que es requerido por el usuario mediante un evento.

_ITEMDETAIL.JSX: Contiene el detalle de cada ítem a renderizar, que recibe por props.

_NAVBAR.JSX: Componente que arma la barra de navegación presente en todo el sitio, mostrando además el Branding y el widget del carro de compras.

_CARTWIDGET.JSX: Widget del carro de compras que renderiza la imagen a desplegarse en el Navbar.

_LOGO.JSX: Renderiza la imagen del branding que se coloca en la esquina superior izquierda del Navbar.

_NAVBAR.CSS: Hoja de estilos del Navbar.

_APP.CSS: Hoja de estilos principal de la app.

_INDEX.CSS: Hoja de estilos global del proyecto.


>ESTADO DEL PROYECTO: En desarrollo. Testing pre-producción.

>ÚLTIMO COMMIT: Se agregó el enrutado de ReactRouterDOM, mediante la declaración de rutas en App.jsx y su llamado utilizando Link y Navlink en los distintos componentes. Se detallaron las categorías de los productos del e-commerce y se actualizó este readme.

>AUTOR: Guillermo Sansano

>REPOSITORIO REMOTO: Se utiliza GitHub, alojado en: https://github.com/gsansano/CoderReact

