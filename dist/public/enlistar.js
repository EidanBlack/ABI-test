let tableList = document.querySelector("#lista");
let tableBody = document.getElementById('tableBody');

const listarProductos = async function () {
    try {
        await fetch('api/v1/products')
        .then(response =>{
            return response.json();
        }).then((datos) =>{
            for (let claves in datos){
                const tr = document.createElement('tr');
                const tdID = document.createElement('td');
                const tdNombre = document.createElement('td');
                const tdDescripcion = document.createElement('td');
                const tdPrecio = document.createElement('td');
                const tdPrecioMayorista = document.createElement('td');
                const tdCantidadDisponible = document.createElement('td');
                const tdCategoria = document.createElement('td');
                const id = document.createTextNode(datos[claves].id);
                const nombre = document.createTextNode(datos[claves].nombre);
                const descri = document.createTextNode(datos[claves].descripcion);
                const precio = document.createTextNode(datos[claves].precio);
                const precioMayorista = document.createTextNode(datos[claves].precio_mayorista);
                const cantidadDisponible = document.createTextNode(datos[claves].cantidad_disponible);
                const categoria = document.createTextNode(datos[claves].categoria);
                tdID.appendChild(id);
                tdNombre.appendChild(nombre);
                tdDescripcion.appendChild(descri);
                tdPrecio.appendChild(precio);
                tdPrecioMayorista.appendChild(precioMayorista);
                tdCantidadDisponible.appendChild(cantidadDisponible);
                tdCategoria.appendChild(categoria);
                tr.appendChild(tdID);
                tr.appendChild(tdNombre);
                tr.appendChild(tdDescripcion);
                tr.appendChild(tdPrecio);
                tr.appendChild(tdPrecioMayorista);
                tr.appendChild(tdCantidadDisponible);
                tr.appendChild(tdCategoria);
                tableBody.appendChild(tr);
            }
        });
    } catch(error){
        console.log(error);
    }
}
listarProductos();
