/*  ////solicitar texto y validar si contiene letra "a"///

let texto =String(prompt( "Ingrese un texto: "));
 console.log("verifica si contiene a " + texto.includes('a'));
*/

   /*  ///solicitar al usuario un texto y mostrar todo en minusculas y mayusculas///

let texto =String(prompt("Ingrese un texto: "));
console.log("todo el texto en mayusculas "+ texto.toLocaleUpperCase());
console.log("todo el texto en minusculas "+ texto.toLowerCase());
 */

/*    ////mostrar primera letra de una palabra//

let texto= String(prompt( "Ingrese una Palabra: "));
console.log(texto [0]);
*/
/*  //// solicitar un texto y mostrar cantidad de caracteres///

let texto= String(prompt( "Ingrese un texto: "));
console.log(texto.length-1);
*/

/* ////Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene////

let digitos = String(parseInt(prompt("ingrese numeros:")));
console.log(digitos.length);

*/

/*  ////Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.///

let palabra= String(prompt("Ingrese una Palabra :"));
console.log("La posicion de un caracter: " +palabra[palabra.length-1]);
*/

/*  ///Ingresar una cadena de texto y reemplazar los espacios por asteriscos

let cadenadetexto=String(prompt("Ingrese un Texto: "));
console.log("Reemplazamos espacios:" + cadenadetexto.replaceAll(" ","*"));
*/
/*  ////Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.

let letra= String(prompt("Ingrese una LETRA: "));
let cadenadetexto=String(prompt("INgrese una FRASE: "));
console.log("Verificar si "+ cadenadetexto +"inclueye : "+ letra  + cadenadetexto.includes(letra));
*/
/*   ////Solicitar un texto y mostrarlo todo menos la primera letra.//

let texto = String(prompt("Ingresar un Texto: "));
let texto1= texto.substring(1);
console.log(texto1);
 */


/*  ///Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.///

let nombre =String(prompt("Ingrese su nombre en minuscula : "));
console.log(  nombre.charAt(0).toUpperCase() + nombre.slice(1));
*/
