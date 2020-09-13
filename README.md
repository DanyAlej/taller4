# Random testing

## Cypress

Se realizo con éxito las pruebas de random testing, se realizo la aleatoriedad creando un número aleatorio del 0 al 3 y se propuso un switch con los siguientes casos:
 0 Hacer click en un link al azar
 1 Llenar un campo de texto al azar
 2 Seleccionar un combo al azar
 3 Hacer click en un botón al azar
 
Para el caso 2, fue necesario usar el home de wikipedia donde se hizo uso del combobox de idioma y se seleccionaron idiomas aleatoriamente.

![](/images/case2.png)

Para el caso 1 de los inputs se realizo el testing en "Crear una cuenta" de wikipedia donde se encontraban varios campos para llenar.

![](/images/case1.png)

Para el caso 3, en general todos los botones de wikipedia en realidad son <li> <a> por tanto siempre se opriomió el mismo boton que es el siguiente: 

![](/images/buttonclick.png)

Por último en general las ejecuciones se demoraban entre 20 y 45 segundos. Y en ocasiones fallaba cuando se quiere visitar un dominio fuera de wikipedia, esto se puede solucionar cambiando en cypress.json la seguridad pero en este caso se evito para no tener que cargar la página cada vez que se quisiera ejecutar el programa de nuevo.

![](/images/completerun.png)

## Android studio random testing

![](/images/ezgif.com-video-to-gif.gif)
