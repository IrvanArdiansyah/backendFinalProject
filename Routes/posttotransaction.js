const router = require('express').Router();
const db = require('../connection')

router.post('/addtotransaction', (req, res) => {
    let sql = 'insert into transactions_tbl set ?'
    let order = req.body
    db.query(sql, order, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send({
            "status": "success add to cart", result
        })
    })
})

module.exports = router;