console.log("***** Functions *****");

/* Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
const resultadoSuma = suma(5, 3);
console.log("Resultado de la suma:", resultadoSuma);
function suma(a, b) {
    return a + b;
}

/* A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
function sumaConValidacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Error: uno de los parámetros no es un número.");
        return NaN;
    }
    return a + b;
}

/* Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */
function validateInteger(num) {
    return Number.isInteger(num);
}

/* A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */
function sumaConValidacionAlerta(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Error: uno de los parámetros no es un número.");
        return NaN;
    }

    if (!Number.isInteger(a)) {
        alert(`Advertencia: el valor "${a}" no es un número entero. Se redondeará.`);
        a = Math.round(a);
    }

    if (!Number.isInteger(b)) {
        alert(`Advertencia: el valor "${b}" no es un número entero. Se redondeará.`);
        b = Math.round(b);
    }

    return a + b;
}

/* Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual. */
function sumaConValidacionLlamadaexterna(a, b) {
    a = validarNumeroEntero(a);
    b = validarNumeroEntero(b);

    return a + b;
}

function validarNumeroEntero(a)
{
    if (!validateInteger(a)) {
        alert("Error: el número no es un entero. Se redondeará.");
        return Math.round(a);
    }
    return a;
}