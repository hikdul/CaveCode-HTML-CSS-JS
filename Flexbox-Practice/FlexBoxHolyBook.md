# FlexBox

Flexbox es un conjunto de propiedades que nos permiten distribuir nuestros elementos de una forma flexible para mejores layouts / plantillas o diseños mas facilmente

Para utilizar flexbox necesitamos un contenedor padre que tenga elementos hijos. Ya que a estos son los que se haran flexiblex.

Flexbox se divide en 2 grupos de propiedades:
	- Propiedades para los elementos padre
	- Propiedades para los elementos hijo



## Propiedades del contenedor padre:

1.- display:flex; 
==> Nos permite habilitar que los elementos hijos sean flexibles

2.- flex-direction:	row | row-reverse | column | column-reverse;
==> nos indica hacia donde es la direccion de donde se va a trabajar con flexbox
==> donde row es fila o pocicion vertical y column es columna o pocicion horizontal
==> por default usa row

3.- flex-wrap: no-wrap | wrap | wrap-reverse;
==> columna
==> por default es 'no-wrap' 
==> wrap es como respeta el tamaño del elemento. si es no wrap entonces viola ese tamano cada ves que quiera

4.- flex-flow: <flex-direction> || flex-wrap;
==>	Es un atajo de flex-direction y flex-wrap.


5.- justify-content: flex-start | flex-end | center | space-between | space-around;
==> indica la diferencia entre espacios y hacia a donde se ubican los elementos
==> indica como se va a organizar el contenido


- align-items: flex-start | flex-end | center | stretch | baseline;
==>Para generar centrados horizontales, de arribba y abajo
== stretch: para que el contenido ubique el 100% del contenedor en lo alto
== baseline: alinea el contenedor en base a la fuente

- align-content: flex-start | flex-end | center | stretch | space-between | space-around;
	IMPORTANTE: Esta propiedad solo funciona cuando hay mas de una linea de elementos.
==>ubica los elementos segun sus distancia arriba, en el centro o abajo
== space-between: separa dando el mayor espacio entre un  elemento y otro
== space-around: seporo dando mismo espacio entre elemenos
== stretch: npi
	


## Propiedades de los elementos hijo

1.- order:;
==> para organizar elementos en base a su valor (order) ordenando de manera asendente en una organizacion normal

2.- flex-grow:;
==> Acepta un numero que servira de proporcion para hacer crecer el elemento en relacion a los otros.
==> Si todos los elementos tienen flex-grow 1 el espacio restante se distribuira entre los elementos.

3.- flex-shrink:;
==> Define la habilidad de un elemento para hacerse mas pequeño.

==> Por defecto todos se pueden hacer mas pequeños pero si le ponemos flex-shrink 0 el elemento no podra ser mas pequeño que su ancho especificado.

4.- flex-basis:;
==> Nos permite especificar el valor inicial que tendra un elemento de ancho.


5.- flex:1 1 auto;
==> Es un atajo para flex-grow, flex-shrink y flex-basis

6.- align-self: auto | flex-start | flex-end | center | baseline | stretch;
==> nos permite pociciona un elemento  en pocicion diferente alos demas en pocicion vertical. 
== baseline: alinea en base a la fuente 
== stretch: para que ocupe todo el espacion en base a la altura de su contenedor