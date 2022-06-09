const botonBuscar = document.getElementById('boton-buscar');
const botonBorrar = document.getElementById('boton-borrar');
const input = document.getElementById('id-buscado');
const tableBody = document.getElementById('tableBody');

async function borrarProducto(idProducto) {
    await fetch('/api/v1/deleteProduct', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'id': idProducto })
    }).then((response)=>{
        if (response.status === 200){
            alert('Tu producto fue eliminado con éxito');
            setTimeout(
                window.location.reload(), 2500
            );
        } else {
            alert('Ocurrió un problema eliminando tu producto');
            setTimeout(
                window.location.reload(), 2500
            );
        }
    })
    .catch((error =>{
        console.log(error);
    }))
}

async function buscarProducto(idProducto) {
    botonBuscar.disabled = true;
    await fetch('/api/v1/searchProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'id': idProducto })
    })
        .then((response) => {
            if (response.status === 404){
                alert('El producto no existe');
                setTimeout(
                    window.location.reload(), 2000
                );
            } 
            return response.json();    
        })
        .then((res) => {
            const tr = document.createElement('tr');
            const tdID = document.createElement('td');
            const tdNombre = document.createElement('td');
            const tdDescripcion = document.createElement('td');
            const tdPrecio = document.createElement('td');
            const tdPrecioMayorista = document.createElement('td');
            const id = document.createTextNode(res.id)
            const nombre = document.createTextNode(res.nombre);
            const descri = document.createTextNode(res.descripcion);
            const precio = document.createTextNode(res.precio);
            const precioMayorista = document.createTextNode(res.precio_mayorista);
            tdID.appendChild(id);
            tdNombre.appendChild(nombre);
            tdDescripcion.appendChild(descri);
            tdPrecio.appendChild(precio);
            tdPrecioMayorista.appendChild(precioMayorista);
            tr.appendChild(tdID);
            tr.appendChild(tdNombre);
            tr.appendChild(tdDescripcion);
            tr.appendChild(tdPrecio);
            tr.appendChild(tdPrecioMayorista);
            tableBody.appendChild(tr);
        })
        .catch((error) => {
            console.log(error);
        })
}

botonBuscar.addEventListener('click', (e) => {
    const idProducto = input.value;
    if (idProducto.length > 0) {
        buscarProducto(idProducto);
    } else {
        alert('Tu búsqueda está vacía');
    }
})

botonBorrar.addEventListener('click', (e)=>{
    const idProduct = input.value;
    if (idProduct.length > 0) {
        borrarProducto(idProduct);
    } else {
        alert('Tu búsqueda está vacía');
    }
})