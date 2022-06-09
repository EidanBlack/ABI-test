import fetch from "cross-fetch";

const url = 'https://app.abi.com.py/api/v1/fab/ciudad/?page=1&page_size=10&token=917e0b7f4273d4459e427f5813715672fc02900e';
let ul = document.querySelector("#list") as HTMLUListElement;

fetch(url)
.then((resp)=> resp.json())
.then(function(data){
    const ciudades = data.results;
    ul.innerHTML = `<li>${ciudades[0].nombre}</li>`;
    console.log(ciudades[0]);
}).catch((error) =>{
    console.log(error);
});