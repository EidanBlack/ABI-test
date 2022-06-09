"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 4000;
const TOKEN = process.env.TOKEN;
const URL = 'https://app.abi.com.py/api/v1/fab';

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
});
app.use(express.json());

app.get('/api/v1/products', async(req, res, next) =>{
    await axios.get(`${URL}/producto/?page=1&page_size=10`, {
        headers: {
            'Authorization': `Token ${TOKEN}`
        }
    }).then((response) =>{
        if(response.status === 200){
            const resultados = response.data.results;
            res.status(200).json(resultados);
        } else {
            res.status(404).json({'ok': false});
        }
        
    }).catch((error)=>{
        console.log(error);
    })
})

app.post('/api/v1/searchProduct', async(req, res, next) =>{
    const idProducto = parseInt(req.body.id);
    await axios.get(`${URL}/producto/${idProducto}/`, 
    {
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Token ${TOKEN}`
        }
    }).then((result) =>{
        if (result.status === 200){
            res.status(200).json(result.data);
        } else if(result.status === 404) {
            res.status(404).json({'ok': false});
        }
    }).catch((error)=>{
        console.log(error);
        res.status(404).json({"message": "error 404"});
    })
})

app.delete('/api/v1/deleteProduct', async(req, res, next) =>{
    const idProducto = parseInt(req.body.id);
    await axios.delete(`${URL}/producto/${idProducto}/`, 
    {
        headers: {
            'Authorization': `Token ${TOKEN}`
        }
    }).then((result) =>{
        if (result.status === 200 || 204){
            res.status(200).json({'ok':true});
        } else {
            res.status(401).json({'ok': false});
        }
    }).catch((error)=>{
        console.log(error);
    })
})


app.post('/api/v1/newProducts', async(req, res, next) =>{
    const product = {
        'fabricante': 50,
        'categoria': 3,
        'nombre': req.body.name,
        'descripcion': req.body.description,
        'descripcion_extensa' : 'larga descripcion de prueba para probar la api',
        'cantidad_mayorista': req.body.mayorQty,
        'precio': parseInt(req.body.normalPrice),
        'precio_mayorista': parseInt(req.body.mayorPrice),
        'cantidad_disponible': req.body.stock
    }

    await axios.post(`${URL}/producto/`, product,
    {
        headers: {
            'Authorization': `Token ${TOKEN}`
        }
    })
    .then((response) => {
        if(response.status === 201){
            res.status(201).json({'message': 'accepted'})
        } else if(response.status === 401){
            res.status(401).json({'message': 'auth error'})
        } else if(response.status === 400){
            res.status(400).json({'message': 'bad request'})
        } else if(response.status === 404){
            res.status(404).json({'message': 'not found'})
        } else if(response.status === 500){
            res.status(500).json({'message':'internal server error'})
        }
    })
    .catch((error) => {
        console.log(error);
        res.status(401).json({'message': 'bad request'})
    });
})
app.use(express.static(path.join(__dirname, 'public')));
