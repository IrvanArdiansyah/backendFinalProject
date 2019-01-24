const router = require('express').Router();
const mysql = require('mysql')

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'Irvan',
    password: 'Numpit27',
    database: 'arsenic'
});

router.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

db.connect()

router.put('/edit/:product_id', (req, res)=>{
    let sql = 'update products_tbl set ? where product_id = ?'
    let addProduct = req.body
    db.query(sql, [addProduct, req.params.product_id], (err, result)=>{
        if(err) throw err;
        res.send(result);
        });
    });

router.delete('/delete/:product_id', (req, res)=>{
    let sql = 'delete from products_tbl where product_id = ?'
    db.query(sql, req.params.product_id, (err, result) => {
        if(err) throw err;
        res.send(result)
    })
})

module.exports = router;