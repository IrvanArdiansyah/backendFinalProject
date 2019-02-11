const router = require('express').Router();
const db = require('../connection')

router.get('/products', (req, res)=>{
    let sql = 'SELECT * FROM products_tbl';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

router.get('/products/:product_id', (req, res)=>{
    let sql = `SELECT * FROM products_tbl WHERE product_id = '${req.params.product_id}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

module.exports = router;