var tamanioCarrito;

if(JSON.parse(localStorage.getItem("carroCompras"))!=null){
  miCarro = JSON.parse(localStorage.getItem("carroCompras"));
}
console.log ("Cantidad de productos: " + productos.length);



if(miCarro == null){
  tamanioCarrito = 0;
} else{
  tamanioCarrito = miCarro.length;
}
$('#carro').text("carrito (" +tamanioCarrito+ ")");



/**Aca armo la lista de productos que se muestra en la home */
let imprimir ="";
for (let i=1; i<=productos.length;i++){
    imprimir = imprimir + `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div class="card mb-3">
                              <img class="card-img-top img-fluid" style="max-height:400px" src="${ productos[i-1].rutaImg }" alt="producto ${i}">
                                <div class="card-body">
                                  <h4 class="card-title">${ productos[i-1].titulo }</h4>
                                    <h5 class="card-title">${productos[i-1].precio }</h5>
                                      <p class="card-text">${ productos[i-1].descripcion}</p>
                                        <button id="" name="producto ${i.toString()}" onclick="carrito(${i})" value="${i.toString()}" type="" class="btn btn-primary btn-block">Agregar al carrito</button>
                                  </div>
                              </div>
                            </div>`;
}
document.getElementById("prueba").innerHTML = imprimir;





function ArmarCarrito(codigo, cantidad) {
    this.codigo = codigo;
    this.cantidad = cantidad;

//Ver si le estoy dando o puedo darle un uso a las funciones estas
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

  

  function carrito (productoId){
      
    /**Muestro por consola el id del producto agregado al carrito y el mumero de productos agregados */
      console.log ("Producto agregado al carrito: Codigo producto: "+productoId);
      console.log ("Cantidad de productos en la base de datos: "+productos.length);
      console.log ("Cantidad de productos en la base de datos: "+tamanioCarrito);
      console.log ("Mi carro: "+miCarro);

      if (tamanioCarrito>0){
        for (let i = 0; i < tamanioCarrito ; i++){
          if (miCarro [i].codigo = productoId){
            miCarro [i].codigo++;
          } else {
            miCarro [i] = new ArmarCarrito(productoId, 1);  
          }
        }     
      } else {
        miCarro [0] = new ArmarCarrito(productoId, 1);
      }
      
      //miCarro [miCarro.length] = new ArmarCarrito(productoId, 1);  
      
      console.log ("se agrego correctamente el producto "+miCarro [miCarro.length-1].codigo);
     
      $('#carro').text("carrito (" +miCarro.length+ ")"); 


     
     
      console.log (miCarro.length); /**ESTO ES PARA PRUEBAS EVENTUALMENTE VUELA*/
          
      console.log("mi carro: " + JSON.stringify(miCarro));
      localStorage.setItem("carroCompras", JSON.stringify(miCarro));
  }

