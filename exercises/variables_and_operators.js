console.log("***** Variables and operadores *****");

/* a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable. */

var num1, num2;
num1 = 5;
num2 = 10;
var sum;
sum = num1 + num2;
console.log(sum);

/* b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */
var str1, str2, str3;
str1 = "Hello";
str2 = "World";
str3 = str1 + " " + str2;
console.log(str3);

/* c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).*/

var firstw, secondw, thirdw;
firstw = "Hello";
secondw = "World";
thirdw = firstw.length + secondw.length;
console.log(thirdw);