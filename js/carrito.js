var miCarro = JSON.parse(localStorage.getItem("carroCompras"));


function MostrarCarrito() {
    var cabeceraTabla = `<table class="table table-dark">
                            <thead> 
                                <tr>  
                                    <th>#</th>
                                    <th>Producto</th> 
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                        <tbody>`;

    var footTabla = `</tbody></table>`;

        $('#carro').html("carrito (" +miCarro.length+ ")");
        //document.getElementById("carro").innerHTML = "carrito (" +miCarro.length+ ")";
        console.log ("Tamaño del carrito" + miCarro.length);
    
        let cuerpoTabla = '';
        let totalCarro = 0;

        for (let i=0; i<miCarro.length;i++){
            aux=i+1;
            cuerpoTabla = cuerpoTabla + `<tr><td>`+ aux +`</td><td>`+ productos[miCarro[i].codigo - 1].titulo+ `</td><td>$`+productos[miCarro[i].codigo - 1].precio+`</td><td>`+miCarro[i].cantidad+`</td><td>$`+productos[miCarro[i].codigo - 1].precio * miCarro[i].cantidad +`</td>
                                    <td>
                                        <button type="button" class="btn btn-success" onclick="AumentarCantidad(${i})" value="`+ miCarro[i].codigo +`">+</button>
                                        <button type="button" class="btn btn-info" onclick="DisminuirCantidad(${i})" value="`+ miCarro[i].codigo +`">-</button>
                                        <button type="button" class="btn btn-danger" onclick="EliminarProducto(${i})" value="`+ miCarro[i].codigo +`" style="margin-left:10px;">Eliminar</button>
                                    </td>
                                </tr>`;

            totalCarro = totalCarro + (productos[miCarro[i].codigo - 1].precio * miCarro[i].cantidad);
        }

        $('#generarCarrito').html(cabeceraTabla + cuerpoTabla + '<tr><td>TOTAL</td><td>$'+totalCarro+'</td></tr>' +  footTabla);
    }    

    //MUESTRO EL CARRITO POR PRIMERA VEZ
MostrarCarrito ();   
/**
 * Funciones para manejar el carrito
 **/    

function EliminarProducto(id){
    let elemBorrado = miCarro.splice(id, 1);
    localStorage.setItem("carroCompras", JSON.stringify(miCarro));
    MostrarCarrito ();
    console.log("que tenemos por aca, estamos en ELIMINAR PRODUCTO");
    return elemBorrado;
    
}

function DisminuirCantidad(id){
    if (miCarro[id].cantidad==1){
        EliminarProducto (id)
        MostrarCarrito ();
    } else {
        miCarro[id].cantidad = miCarro[id].cantidad - 1;
        console.log("que tenemos por aca, estamos en DisminuirCantidad" + miCarro[id].cantidad);
        localStorage.setItem("carroCompras", JSON.stringify(miCarro));
        MostrarCarrito ();
    }
    
    console.log("que tenemos por aca, estamos en DisminuirCantidad");
}
 
function AumentarCantidad(id){
    miCarro[id].cantidad = miCarro[id].cantidad + 1;
    localStorage.setItem("carroCompras", JSON.stringify(miCarro));
    console.log("que tenemos por aca, estamos en aumentar Cantidad" + miCarro[id].cantidad);
    MostrarCarrito ();
}