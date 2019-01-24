const express = require('express');
const app = express();
const mysql = require('mysql')
const bodyParser = require ('body-parser')
// const cors = require('cors')

const menWalletRoute = require ('./Routes/getmenwallets');
const menBeltsRoute = require ('./Routes/getmenbelts')
const editProductRoute = require ('./Routes/editproduct')

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'Irvan',
    password: 'Numpit27',
    database: 'arsenic'
});

app.use('/Assets/Img/1/1', express.static('Assets/Img/1/1'));
app.use('/Assets/Img/1/2', express.static('Assets/Img/1/2'));
app.use('/Assets/', express.static('Assets/Img/Assets'));
app.use(bodyParser.json())
// app.use(cors())
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(menWalletRoute)
app.use(menBeltsRoute)
app.use(editProductRoute)

db.connect();

// ========= START REGISTER ========= //
// |||||||||||||||||||||||||||||||||| //

app.post('/datauser', (req, res)=>{
    console.log(req.body)
    let dataUser = {
        firstnama: req.body.firstnama,
        lastname: req.body.lastname,
        gender: req.body.gender,
        birthday: req.body.birthday,
        email: req.body.email,
        password: req.body.password
    }
    let sql = 'insert into datauser set ?'
    db.query(sql, dataUser, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// |||||||||||||||||||||||||||||||||| //
// ========== END REGISTER ========== //

app.post('/products', (req, res)=>{
    console.log(req.body)
    let addProduct = req.body
    let sql = 'insert into products_tbl set?'
    db.query(sql, addProduct, (err, result)=>{
        if(err) throw err;
        res.send(result);
    })
});


// // ======= START SHOW MEN PRODUCTS =======//
// // |||||||||||||||||||||||||||||||||| //

app.get('/products', (req, res)=>{
    let sql = 'SELECT * FROM products_tbl';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
// // ======= END SHOW PRODUCTS ======= //

// // === START SHOW DETAIL PRODUCTS ===//
// // ||||||||||||||||||||||||||||||||| //

app.get('/products/:product_id', (req, res)=>{
    let sql = `SELECT * FROM products_tbl WHERE product_id = '${req.params.product_id}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
// === END SHOW DETAILS PRODUCTS === //

// db.end();

app.listen(3320, ()=>{
    console.log('server jalan di 3320')
})