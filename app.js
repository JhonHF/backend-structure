'use strict'
const express = require("express")
const cors = require("cors")
const app = express()
const { productRoutes } = require("./components/products/products.routes")
app.set("port", 3000)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept,Access-Control-Request-Method,Authorization');
    res.header('Access-Control-Request-Methods', 'GET, POST,OPTIONS,PUT,DELETE');
    res.header('Allow', 'GET, POST,OPTIONS,PUT,DELETE');
    next();
})
app.use("/api/v1/products", productRoutes())

app.get('/', (req, res) =>
res.send(`the api is at http://localhost:${app.get('port')}`)
);


module.exports.app = app;