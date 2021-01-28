/**Tengo que tratar de hacer lo mismo que estaba haciendo antes con un array de arrays, pero con un array de objetos. por lo que primero deberia definir el objeto 
 * Agregar "categoria"
*/

function Producto(codigo, titulo, descripcion, precio, rutaImg) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.rutaImg = rutaImg;


    
    /**No le encuentro utilidad a hacer estos metodos, ya que puedo tomar los valores directamente */
    this.mostrarRutaImg = function() {
      console.log("la ruta de la imagen del producto es: " + this.rutaImg);
    };
    this.mostrarPrecio = function() {
      console.log("el precio es: " + this.precio);
    };
  }

/**Inicializar un array con los productos, mi idea es levantar estos datos desde un JSON */
var productos = [];
productos[0] = new Producto (1, "Titulo del producto 1", "Aca iria una descripcion del producto 1", 315.99, "media/producto_1.jpg"); 
productos[1] = new Producto (2, "Titulo del producto 2", "Aca iria una descripcion del producto 2", 615.39, "media/producto_2.jpg"); 
productos[2] = new Producto (3, "Titulo del producto 3", "Aca iria una descripcion del producto 3", 395.95, "media/producto_3.jpg"); 
productos[3] = new Producto (4, "Titulo del producto 4", "Aca iria una descripcion del producto 4", 2315.99, "media/producto_4.jpg"); 
productos[4] = new Producto (5, "Titulo del producto 5", "Aca iria una descripcion del producto 5", 3015.99, "media/producto_5.jpg"); 
productos[5] = new Producto (6, "Titulo del producto 6", "Aca iria una descripcion del producto 6", 3415.99, "media/producto_6.jpg"); 
productos[6] = new Producto (7, "Titulo del producto 7", "Aca iria una descripcion del producto 7", 6315.99, "media/producto_7.jpg"); 
productos[7] = new Producto (8, "Titulo del producto 8", "Aca iria una descripcion del producto 8", 9315.99, "media/producto_8.jpg"); 

/**Aca armo la lista de productos que se muestra en la home */
let imprimir ="";
for (let i=1; i<=8;i++){
    imprimir = imprimir + '<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3"><div class="card mb-3"><img class="card-img-top img-fluid" style="max-height:400px" src="' + productos[i-1].rutaImg + '" alt="producto '+ i +'"><div class="card-body"><h4 class="card-title">'+ productos[i-1].titulo +'</h4> <h5 class="card-title">$'+ productos[i-1].precio +'</h5><p class="card-text">'+ productos[i-1].descripcion +'</p><button id="" name="producto'+ i.toString() +'" onclick="carrito('+i+')" value="'+ i.toString() +'" type="" class="btn btn-primary btn-block">Agregar al carrito</button></div></div></div>';
}
document.getElementById("prueba").innerHTML = imprimir;






function ArmarCarrito(codigo, cantidad) {
    this.codigo = codigo;
    this.cantidad = cantidad;


    this.agregar = function() {
      this.cantidad++;
      console.log("cantidad: " + this.cantidad);
    };
    this.quitar = function() {
        this.cantidad--;
        console.log("cantidad " + this.cantidad);
      };
    this.eliminar = function() {
        this.cantidad = 0;
        console.log("el precio es: " + this.precio);
    };
  }

  

/**Esta funcion tendria que armar el carrito y ponerlo en una tabla, tengo mis dudas como hacer que la informacion que agrego aca se pueda leer en la pagina del carrito, pero la idea viene por aca, bien googleando veo que lo vamos a ver en la clase de hoy, asi que voy a evitar la manija y lo voy a hacer por consola hasta que tenga los conocimientos necesarios.. 
 */
var miCarro = [];
var cabeceraTabla = '<table class="table table-dark"><thead> <tr>  <th>#</th> <th>Producto</th> <th>precio</th> <th>opciones</th></tr></thead><tbody>';
var footTabla = '</tbody></table>';
function carrito (productoId){
    
    console.log ("Producto agregado al carrito: Codigo producto: "+productoId);
    console.log ("Cantidad de productos en la base de datos: "+productos.length);
    miCarro [miCarro.length] = new ArmarCarrito(productoId, 1);  
    
    console.log ("se agrego correctamente el producto "+miCarro [miCarro.length-1].codigo);
    //mm si le pongo a todos botonCarro como id me toma siempre el primero. como puedo hacer que tome el valor sin ponerle a todos nombres <>
    //let valor = document.getElementById("botonCarro").value;
    //console.log (valor);
    
    //numProductosCarro++;
    document.getElementById("carro").innerHTML = "carrito (" +miCarro.length+ ")";
    console.log (miCarro.length); /**ESTO ES PARA PRUEBAS EVENTUALMENTE VUELA*/
    document.getElementById("alerta").innerHTML = '<div  class="alert alert-primary alert-dismissible fade show" role="alert">    <strong>Aca puedo poner un mensaje, tipo producto agregado al carrito</strong><a href="carrito.html">VER CARRITO!</a><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';




    let cuerpoTabla = '';
    let totalCarro = 0;

    for (let i=0; i<miCarro.length;i++){
        aux=i+1;
        cuerpoTabla = cuerpoTabla + '<tr><td>'+ aux +'</td><td>'+productos[miCarro[i].codigo - 1].titulo+'</td><td>$'+productos[miCarro[i].codigo - 1].precio+'</td><td>+ - x</td></tr>';

        totalCarro = totalCarro + productos[miCarro[i].codigo - 1].precio
    }

    

    document.getElementById("generarCarrito").innerHTML = cabeceraTabla + cuerpoTabla + '<tr><td>TOTAL</td><td>$'+totalCarro+'</td></tr>' +  footTabla;

}
/**QUE informacion necesito para un jason de productos???
 * 
 */
