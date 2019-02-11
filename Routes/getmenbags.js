const router = require('express').Router();
const db = require('../connection')

router.get('/menbags', (req, res)=>{
    let sql = 'SELECT * FROM products_tbl where category_id = 1 and product_category_id = 3';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


router.get('/menbags/:product_id', (req, res)=>{
    let sql = `SELECT * FROM products_tbl WHERE product_id = '${req.params.product_id}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

module.exports = router;