const router = require('express').Router();
const db = require('../connection')

router.delete('/delete/:product_id', (req, res) => {
    let sql = 'delete from products_tbl where product_id = ?'
    db.query(sql, req.params.product_id, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

module.exports = router;