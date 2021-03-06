var tamanioCarrito;
var miCarro = JSON.parse(localStorage.getItem("carroCompras"));
var productos;
var categorias;
var codigo = 0;


//levantar con ajax los productos para tenerlos disponibles
$.ajax({
  type: "get",
  url: "../json/productos.json",
  dataType: "json",
  success: function (respuesta) {
    productos = respuesta;
    FiltrarProductos(codigo);
  }
});

//levantar con ajax las categorias para tenerlas disponibles
$.ajax({
  type: "get",
  url: "../json/categorias.json",
  dataType: "json",
  success: function (respuesta) {
    categorias = respuesta;
    
  }
});



function FiltrarProductos(codigo){

//aca me hubiese gustado optimizar de alguna manera, pero no lo logré
  $.ajax({
    type: "get",
    url: "../json/productos.json",
    dataType: "json",
    success: function (respuesta) {
      productos = respuesta;
      
    }
  });

  if (codigo==0){
    MostrarProductos();
  }
    else{
      for(let i=0;i<productos.length;i++){
        if(productos[i].categoria != codigo){
          productos.splice(i, 1);
          i--;
          
        }
        
      }
      MostrarProductos();
    }
  }


function MostrarProductos(){

  if(miCarro == null){
    miCarro = [];
    tamanioCarrito = 0;
  } else{
    tamanioCarrito = miCarro.length;
  }
  //Reemplazo el tamaño del carrito en el id carro, para que se muestre en la pantalla
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
                                          <button id="" name="producto ${i.toString()}"onclick="carrito(${i})" value="${i.toString()}" type="" class="btn btn-primary btn-block">Agregar al carrito</button>
                                    </div>
                                </div>
                              </div>`;
  }
  $('#mostarProductos').html(imprimir);

}  

 

function ArmarCarrito(codigo, cantidad) {
      this.codigo = codigo;
      this.cantidad = cantidad;

  //Ver si le estoy dando o puedo darle un uso a las funciones estas
      this.agregar = function() {
        this.cantidad++;
        
      };
      this.quitar = function() {
          this.cantidad--;
          
        };
      this.eliminar = function() {
          this.cantidad = 0;
          
      };
    }

    
    function carrito (productoId){
      tamanioCarrito = miCarro.length;
    
        if (tamanioCarrito>0){
          let encontrado = false;
          
          //Este for recorre el carro y si encuentra que hay un item con algun codigo ya cargado, le suma 1 a cantidad
          for (let i = 0; i < tamanioCarrito ; i++){
            
            if (miCarro [i].codigo == productoId){
              miCarro [i].cantidad = miCarro [i].cantidad + 1;
              encontrado = true;
            }  
            }
          if (!encontrado){
              miCarro [miCarro.length] = new ArmarCarrito(productoId, 1); 
          }      
        } else {
          miCarro [0] = new ArmarCarrito(productoId, 1);
        }
            
        $('#carro').text("carrito (" +miCarro.length+ ")"); 

        localStorage.setItem("carroCompras", JSON.stringify(miCarro));
        miCarro = JSON.parse(localStorage.getItem("carroCompras"));
    }
  
