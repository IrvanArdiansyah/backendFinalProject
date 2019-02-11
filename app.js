const express = require('express');
const app = express();
const upload = require('express-fileupload')
const bodyParser = require ('body-parser')
const menWalletRoute = require ('./Routes/getmenwallets');
const menBeltsRoute = require ('./Routes/getmenbelts')
const menBagsRoute = require ('./Routes/getmenbags')
const editProductRoute = require ('./Routes/editproduct')
const deleteProductRoute = require ('./Routes/deleteproduct')
const addProductRoute = require ('./Routes/addproduct')
const showProductsRoute = require ('./Routes/showproduct')
const registerRoute = require ('./Routes/register')
const loginRoute = require ('./Routes/login')
const ststicRoutes = require ('./Routes/staticroutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(upload())
app.use(ststicRoutes)
app.use(registerRoute)
app.use(loginRoute)
app.use(menWalletRoute)
app.use(menBeltsRoute)
app.use(menBagsRoute)
app.use(editProductRoute)
app.use(deleteProductRoute)
app.use(addProductRoute)
app.use(showProductsRoute)


app.listen(3320, ()=>{
    console.log('server jalan di 3320')
})