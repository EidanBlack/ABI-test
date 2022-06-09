import dotenv = require('dotenv');
dotenv.config();
import express = require('express');
import path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server listening in port ${PORT}`);
    console.log(__dirname);
});


app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

