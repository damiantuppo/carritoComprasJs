//jqdocument ready, espera a que cargue el dom de la pagina para ejecutar el codigo
$(document).ready(function () {
    $('h1').html('reemplaza todas las etiquetas h1 por lo que ponga aca');
});
//Desde jquery 3 no hace falta poner $(document).ready(function()), la forma suguiente es equivalente.
$(function() {
    $('h1').html('reemplaza todas las etiquetas h1 por lo que ponga aca');
    
    });

// con punto se selecciona por clase
$(function() {
    $('.miH1').html('reemplaza el texto de la clase miH1');
    });    
// con # se selecciona por id
$(function() {
    $('#miId').html('reemplaza el texto del id miID');
    });  


//Algunas funciones copadas:

/**
 * addclass agrega una clase 
$(selector).addClass(className);

remueve una clase
$(selector).removeClass(className);
*/

//Append agrega un elemento al final dentro del selector
//$(selector).append(content);


//prepend agrega un elemento al principio dentro del selector
//$(selector).prepend(content);

$(function() {
$('#miId').css('color', 'blue');
});