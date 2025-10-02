console.log("Mi primera app en express");
require('dotenv').config();
const express = require('express');
const products = require('./data/products');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
res.header("Access-Control-Allow-Headers", "Content-Type");
next();
});

// endpoints
// http://localhost:3000/
app.get('/', (req, res) => {
    res.json({
        message: '¡Hola! Express funcionando',
        timestamp: new Date().toISOString(),
        status: 'success',
    })
});

// http://localhost:3000/products
app.get('/products', (req, res) => {
    res.json({
        message: 'Productos',
        timestamp: new Date().toISOString(),
        status: 'success',
        products: products
    });
});

app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return res.status(404).json({
            message: 'producto no encontrado',
            timestamp: new Date().toISOString(),
            status: 'Error',
        });
    }
    res.status(200).json({
        message: 'producto',
        timestamp: new Date().toISOString,
        status: 'success',
        product: product

        
    });
})

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});