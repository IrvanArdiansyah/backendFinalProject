const router = require('express').Router();
const mysql = require('mysql')

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'Irvan',
    password: 'Numpit27',
    database: 'arsenic'
});

db.connect()

router.get('/menbelts', (req, res)=>{
    let sql = 'SELECT * FROM products_tbl where category_id = 1 and product_category_id = 2';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


router.get('/menbelts/:product_id', (req, res)=>{
    let sql = `SELECT * FROM products_tbl WHERE product_id = '${req.params.product_id}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

module.exports = router;