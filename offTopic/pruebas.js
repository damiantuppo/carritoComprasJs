/**Metodos sobre cadenas: */
let cadena = "Cadena de prueba, aca va texto, mucho texto, de hecho no se que carajo poner. Pero bueno, creo que ya es mas que suficiente";

/**concat: concatena dos o mas cadenas de texto */
let cadena2 = " esto es otra cadena";
let resultado = cadena.concat (cadena2);
document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**startsWith: devuelve true si la cadena a la cual se le aplica el metodo comienza con los caracteres de otra cadena. si no devuelve false */
cadena2 = "cadena de"//distingue mayusculas minisculas etc
resultado = cadena.startsWith(cadena2);

document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**endsWith: Lo mismo que el anterior pero compara la cadena al final de la misma */
cadena2 = "que suficiente"//distingue mayusculas minisculas etc
resultado = cadena.endsWith(cadena2);

document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**endsWith: Lo mismo que el anterior pero compara la cadena al final de la misma */
cadena2 = "que suficiente"//distingue mayusculas minisculas etc
resultado = cadena.endsWith(cadena2);

document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**includes: Lo mismo que el anterior pero compara las cadenas en cualquier posicion, devuelve true si la cadena 2 está incluida en cadena */
cadena2 = "que"//distingue mayusculas minisculas etc
resultado = cadena.includes(cadena2);

document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**indexOf: devuelve la posicion en la que encuentra la primer coincidencia de una cadena que esta incluida en otra*/
cadena2 = "de"//distingue mayusculas minisculas etc
resultado = cadena.indexOf(cadena2);

document.write(cadena2 + " esta dentro de cadena 1, en la posicion: "+ resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**lastIndexOf: Lo mismo que el anterior pero busca la ultima cadena que aparece en caso de que se repitan */
cadena2 = "de"//distingue mayusculas minisculas etc
resultado = cadena.lastIndexOf(cadena2);

document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**repeat: repite la cadena el numero de veces indicado*/
resultado = cadena.repeat(5);
document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**split: Divide la cadena*/
resultado = cadena.split(" ");
document.write(resultado[4]);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**substring(pos que empieza, pos que termina) : Muestra los caracteres desde la pos que empieza hasta la que termina*/
resultado = cadena.substring(0,15);
document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**toLowerCase: convierte la cadena a minusculas*/
resultado = cadena.toLowerCase();
document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**toUpperCase: convierte la cadena a mayusculas*/
resultado = cadena.toUpperCase();
document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas! 
/**---------------------------------------------------------------------*/


/**toString: convierte la cadena a string*/
let cadena3=50;
resultado = cadena3.toString();
document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas!
/**---------------------------------------------------------------------*/


/**trim: Elinina los espacios*/
cadena3="            asdasdasdas              ";
resultado = cadena3.trim();
document.write(resultado);
document.write("<br><br>"); //Br para dejar espacios nomas!