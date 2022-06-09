let producto = {
    'name': '',
    'normalPrice': '',
    'mayorPrice': '',
    'mayorQty': 0,
    'description': '',
    'category': '',
    'stock': ''
}
const button = document.querySelector('button');

async function hacerPeticion() {
    await fetch('/api/v1/newProducts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(producto)
    })
    .then((response) => {
        if(response.status == 201){
            alert("Producto Cargado con éxito");
            setTimeout(
                window.location.reload(), 2500
            );           
        } else {
            alert("Ocurrió un error al cargar tu producto:" + response.status);
        }
    })
    .catch(error=>console.log(error));
}

button.addEventListener('click', (e)=>{
    producto.name = document.getElementById('name').value;
    producto.normalPrice = document.getElementById('normalPrice').value;
    producto.mayorPrice = document.getElementById('mayorPrice').value;
    producto.mayorQty = document.getElementById('mayorQty').value;
    producto.description = document.getElementById('description').value;
    producto.category = document.getElementById('category').value;
    producto.stock = document.getElementById('stock').value;

    if (producto.name.length === 0 || producto.normalPrice.length === 0 || producto.mayorPrice.length === 0 ||
        producto.mayorQty.lenght === 0 || producto.description.length === 0 || producto.category.length == 0 ||
        producto.stock.length === 0) {
        alert('Todos los campos son obligatorios');
    } else {
        try {
            hacerPeticion();
        }catch(error){
            console.log(error);
        }
    }
});
