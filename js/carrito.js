var miCarro = JSON.parse(localStorage.getItem("carroCompras"));

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

    $('#carro').html("carrito (" +miCarro.length+ ")");
    //document.getElementById("carro").innerHTML = "carrito (" +miCarro.length+ ")";
    console.log ("Tamaño del carrito" + miCarro.length);
 
    let cuerpoTabla = '';
    let totalCarro = 0;

    for (let i=0; i<miCarro.length;i++){
        aux=i+1;
        cuerpoTabla = cuerpoTabla + `<tr><td>`+ aux +`</td><td>`+ productos[miCarro[i].codigo - 1].titulo+ `</td><td>$`+productos[miCarro[i].codigo - 1].precio+`</td>
                                <td>
                                    <button type="button" class="btn btn-success">+</button>
                                    <button type="button" class="btn btn-info">-</button>
                                    <button type="button" class="btn btn-danger" style="margin-left:10px;">Eliminar</button>
                                </td>
                            </tr>`;

        totalCarro = totalCarro + productos[miCarro[i].codigo - 1].precio
    }

    $('#generarCarrito').html(cabeceraTabla + cuerpoTabla + '<tr><td>TOTAL</td><td>$'+totalCarro+'</td></tr>' +  footTabla);
    


    



 