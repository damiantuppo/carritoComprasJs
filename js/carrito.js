const productos = [
    {
        "codigo" : "1",
        "categoria" : "Fertilizantes",
        "titulo" : "Producto 1",
        "descripcion" : "Descripción del producto 1",
        "precio": 1233,
        "stock" : 5,
        "rutaImg" : "media/producto_1.jpg"
    },
    {
        "codigo" : "2",
        "categoria" : "Remeras",
        "titulo" : "Producto 2",
        "descripcion" : "Descripción del producto 1",
        "precio": 4322,
        "stock" : 23,
        "rutaImg" : "media/producto_2.jpg"
    },
    {
        "codigo" : "3",
        "categoria" : "Calzado",
        "titulo" : "Producto 3",
        "descripcion" : "Descripción del producto 1",
        "precio": 4123,
        "stock" : 234,
        "rutaImg" : "media/producto_3.jpg"
    },
    {
        "codigo" : "4",
        "categoria" : "Fertilizantes",
        "titulo" : "Producto 4",
        "descripcion" : "Descripción del producto 1",
        "precio": 1234,
        "stock" : 11,
        "rutaImg" : "media/producto_4.jpg"
    },
    {
        "codigo" : "5",
        "categoria" : "Cultivo",
        "titulo" : "Producto 5",
        "descripcion" : "Descripción del producto 1",
        "precio": 4321,
        "stock" : 432,
        "rutaImg" : "media/producto_5.jpg"
    },
    {
        "codigo" : "6",
        "categoria" : "Fertilizantes",
        "titulo" : "Producto 6",
        "descripcion" : "Descripción del producto 1",
        "precio": 2341,
        "stock" : 1,
        "rutaImg" : "media/producto_6.jpg"
    },
    {
        "codigo" : "7",
        "categoria" : "Cultivo",
        "titulo" : "Producto 7",
        "descripcion" : "Descripción del producto 1",
        "precio": 4324,
        "stock" : 12,
        "rutaImg" : "media/producto_7.jpg"
    },
    {
        "codigo" : "8",
        "categoria" : "Remeras",
        "titulo" : "Producto 8",
        "descripcion" : "Descripción del producto 1",
        "precio": 1209,
        "stock" : 4,
        "rutaImg" : "media/producto_8.jpg"
    }
  ];

var miCarro = JSON.parse(localStorage.getItem("carroCompras"));

console.log("dasdasd" + miCarro[2].codigo );


var cabeceraTabla = `<table class="table table-dark">
                        <thead> 
                            <tr>  
                                <th>#</th>
                                <th>Producto</th> 
                                <th>precio</th> 
                                <th>opciones</th>
                            </tr>
                        </thead>
                    <tbody>`;

var footTabla = `</tbody></table>`;

   
    document.getElementById("carro").innerHTML = "carrito (" +miCarro.length+ ")";
    console.log (miCarro.length); /**ESTO ES PARA PRUEBAS EVENTUALMENTE VUELA*/
 
    let cuerpoTabla = '';
    let totalCarro = 0;

    for (let i=0; i<miCarro.length;i++){
        aux=i+1;
        cuerpoTabla = cuerpoTabla + `<tr><td>`+ aux +`</td><td>`+ productos[miCarro[i].codigo - 1].titulo+ `</td><td>$`+productos[miCarro[i].codigo - 1].precio+'</td><td> <button type="button" class="btn btn-success">+</button>    <button type="button" class="btn btn-info">-</button><button type="button" class="btn btn-danger" style="margin-left:10px;">Eliminar</button></td></tr>';

        totalCarro = totalCarro + productos[miCarro[i].codigo - 1].precio
    }

    
    document.getElementById("generarCarrito").innerHTML = cabeceraTabla + cuerpoTabla + '<tr><td>TOTAL</td><td>$'+totalCarro+'</td></tr>' +  footTabla;




    /**JQUERY */

 