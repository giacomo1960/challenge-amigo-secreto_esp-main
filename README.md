## **JUEGO DEL AMIGO SECRETO**

## **TITULO PROYECTO**

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.Para iniciar un nuevo juego se deberá pulsar boton " Reiniciar sorteo".
## Screenshot
[DEMO_1_PORTADA.pdf](https://github.com/user-attachments/files/19254096/DEMO_1_PORTADA.pdf)


## **COMO ESTA CONSTRUIDO EL JUEGO**

1. Usuario ingresa un nombre en el campo de texto y lo agrega a la lista de amigos creada anteriormente.

[DEMO_2_INGRESO_AMIGO.pdf](https://github.com/user-attachments/files/19254101/DEMO_2_INGRESO_AMIGO.pdf)
2. Tiene una función de agregar amigos.
3. Captura el valor del campo de entrada: usando document.getElementById para obtener el texto ingresado por el usuario.

4. Tiene validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, ingrese un nombre."

[DEMO_8_ALERTA_INGRESE_NOMBRE.pdf](https://github.com/user-attachments/files/19254159/DEMO_8_ALERTA_INGRESE_NOMBRE.pdf)

5. Verifica si el nombre esta escrito, enviando un mensaje "Este nombre ya está en la lista"

[DEMO_5_ALERTA_NOMBRE_REPETIDO.pdf](https://github.com/user-attachments/files/19254163/DEMO_5_ALERTA_NOMBRE_REPETIDO.pdf)

6. Actualiza la lista de amigos: Si el valor es válido, se agrega al listado de nombres de amigos usando el método.push().

[DEMO_3_LISTADO_AMIGOS.pdf](https://github.com/user-attachments/files/19254165/DEMO_3_LISTADO_AMIGOS.pdf)


7. Se limpia el campo de entrada después de añadir el nombre y se restablece el campo de texto a una cadena vacía.

8. Tiene una función que recorre el listado de amigos y agrega cada nombre como un elemento <li> dentro de una lista HTML.

9. Se usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

10.Se usa document.getElementById() para seleccionar la lista donde se mostrarán los amigos.

11.Se limpia la lista existente con lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

12.Se usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (li) para cada título.

13.Se agregan elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.

14.Se escribe una función que selecciona de manera aleatoria uno de los nombres almacenados en el listado de amigos, usando Math.random() y Math.floor() para obtener un índice aleatorio.

15.Se valida que haya amigos disponibles antes de sortear, mostrando alerta que dice:" No hay suficientes inscritos para sortear, minimo 3 amigos" y se comprueba que el listado de amigos no está vacío.

[DEMO_6_ALERTA_MINIMO_NOMBRES.pdf](https://github.com/user-attachments/files/19254169/DEMO_6_ALERTA_MINIMO_NOMBRES.pdf)

16.Se genera un índice aleatorio usando Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

17.Se obtiene el nombre sorteado con el índice aleatorio para acceder al nombre correspondiente en el arreglo.

18.Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.

[DEMO_7_AMIGO_SORTEADO.pdf](https://github.com/user-attachments/files/19254176/DEMO_7_AMIGO_SORTEADO.pdf)

19.Para terminar el proceso hay una función reiniciarSorteo(), que borra la lista de amigos y el resultado dejando en cero la casilla de " Ingrese un nombre".
[DEMO_9_REINICIO_SORTEO.pdf](https://github.com/user-attachments/files/19254273/DEMO_9_REINICIO_SORTEO.pdf)

## **Tech Stack**

**Frontend:** Html, Css, Javascript



