console.log("***** Strings *****");

/* a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var text;
text= "One of the best";
text.toUpperCase();
console.log(text.toUpperCase());

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var text2, result2;
text2= "Number of the beast";
result2 = text2.substring(0,5);
console.log(result2);

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var text3, result3;
text3 = "Back in time";
result3 = text3.substring(9);
console.log(result3);

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var text4, result4;
text4 = "the wall";
result4 = text4.substring(0,1).toUpperCase() + text4.substring(1).toLowerCase();
console.log(result4);

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var text5, result5;
text5 = "The wall is a great album";
result5 = text5.indexOf(" ");
console.log(result5);

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de cada palabra en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var text6, result6;
text6 = "empanadas salteñas";
var firstSpace = text6.indexOf(" ");
result6 = text6.substring(0, 1).toUpperCase() + text6.substring(1, firstSpace).toLowerCase() + " " + text6.substring(firstSpace + 1, firstSpace + 2).toUpperCase() + text6.substring(firstSpace + 2).toLowerCase();
console.log(result6);