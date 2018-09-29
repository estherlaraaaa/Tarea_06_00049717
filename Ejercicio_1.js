var productos = [];
var ventas = [];

while (true) {
    var opcion = prompt(" 1-Agregar producto.\n 2-Modificar stock. \n 3-Registrar venta.\n 4-Promedio de ingresos.\n 5-Productos sin stock.\n 6- Salir.")

    if (opcion == 1) {
        agregarProducto();
    }
    else if (opcion == 2) {
        modificarStock();
    }
    else if (opcion == 3) {
        registrarVenta();
    } else if (opcion == 4) {
        promVentas();
    } else if (opcion == 5) {
        stockCero();
    }
    else if (opcion == 6) {
        alert("Ha salido del programa");
        break;
    }
}


function agregarProducto() {
    let codigo, descripción, tipo, pCompra, pVenta, stock;
    alert("Bienvenido al formulario de registro de prodcutos, por favor llene todos los campos.");
    while (true) {
        codigo = prompt("Ingrese el código del producto.");
        for (let x of productos) {
            if (x.Codigo == codigo) {
                codigo = null;
            }
        }
        if (codigo != null) {
            break;
        } else {
            alert("Ese código ya ha sido registrado.");
        }
    }

    descripción = prompt("Ingrese la descripción del producto.");
    tipo = prompt("Especifique el tipo de producto.");
    pCompra = prompt("Ingrese el precio de compra del producto. ($)");
    pVenta = prompt("Ingrese el precio de venta del producto. ($)");
    while (true) {
        stock = prompt("Ingrese el stock del producto. (Mayor o igual a 0)");
        if (stock < 0) {
            alert("Ingrese una cantidad válida.");
        } else {
            break;
        }
    }

    productos.push(
        {
            Codigo: codigo,
            Descripcion: descripción,
            Tipo: tipo,
            pCompra: pCompra,
            pVenta: pVenta,
            stock: stock
        }
    );

    alert("Se ha registrado un producto");

}

function modificarStock() {
    let codigo, producto = null, stock;
    alert("Ingrese datos para modificar");
    codigo = prompt("Ingrese el código del producto.");
    for (let x of productos) {
        if (codigo == x.Codigo) {
            producto = x;
        }
    }

    if (producto != null) {

        while (true) {
            stock = prompt("Ingrese el nuevo stock del producto.", producto.Stock);
            if (stock < 0) {
                alert("Ingrese una cantidad válida.");
            } else {
                break;
            }
        }

        producto.Stock = stock;
        alert("Se han guardado los cambios.");

    } else {
        alert("El producto especificado no existe.")
    }
}

function registrarVenta() {
    let codigo, producto = null, stock;
    alert("Registrando un producto");
    codigo = prompt("Ingrese el código del producto.");
    for (let x of productos) {
        if (codigo == x.Codigo) {
            producto = x;
        }
    }

    if (producto != null) {

        if (producto.Stock != 0) {
            while (true) {
                stock = prompt("Ingrese la cantidad de producto a vender.", producto.Stock);
                if (stock <= 0) {
                    alert("Ingrese una cantidad válida.");
                } else if (producto.Stock - stock < 0) {
                    alert("No cuenta con stock suficiente para realizar la venta.");
                } else {
                    break;
                }
            }

            producto.Stock -= stock;
            ventas.push({
                Codigo: codigo,
                Cantidad: Number(stock)
            });
            alert("Se ha realizado la venta.");
        } else {
            alert("El stock de este producto es 0.")
        }

    } else {
        alert("El producto especificado no existe.")
    }
}

function promVentas() {
    if (ventas.length != 0) {
        let ingresos = 0.0;
        let cantidad = 0.0;

        for (let venta of ventas) {
            for (let prod of productos) {
                if (prod.Codigo == venta.Codigo) {
                    ingresos += (prod.Precio_Venta - prod.Precio_Compra) * venta.Cantidad;
                    cantidad += venta.Cantidad;
                }
            }
        }

        alert("El promedio de ingresos por artículo es: " + (+(ingresos / cantidad).toFixed(2)));

    } else {
        alert("No se han realizado ventas.");
    }
}

function stockCero() {
    alert("Listado de productos con stock de 0.");
    let bandera = false;
    for (let x of productos) {
        if (x.Stock == 0) {
            let msg = "";
            msg = msg + "Código: " + x.Codigo + "\n";
            msg = msg + "Descripción: " + x.Descripcion + "\n";
            msg = msg + "Tipo: " + x.Tipo + "\n";
            alert(msg);
            bandera = true;
        }
    }

    if (!bandera) {
        alert("No hay productos con stock de 0.");
    }
}
