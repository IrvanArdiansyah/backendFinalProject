const router = require('express').Router();
const db = require('../connection')

router.delete('/deletefromcart/:user_id/:product_id', (req, res) => {
    // console.log(req.params)
    let sql = `delete from cart_tbl where user_id = ${req.params.user_id} and product_id = ${req.params.product_id}`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

router.delete('/deletefromcart/:user_id', (req, res) => {
    // console.log(req.params)
    let sql = `delete from cart_tbl where user_id = ${req.params.user_id}`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

router.delete('/deletefromcart/:user_id/:product_id/:cart_id', (req, res) => {
    // console.log(req.params)
    let sql = `delete from cart_tbl where user_id = ${req.params.user_id} and product_id = ${req.params.product_id} and cart_id = ${req.params.cart_id}`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

module.exports = router;