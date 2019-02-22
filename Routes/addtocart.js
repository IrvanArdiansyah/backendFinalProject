const router = require('express').Router();
const db = require('../connection')

router.post('/addtocart', (req, res)=>{
    let user_id = req.body.user_id
    let product_id = req.body.product_id
    let quantity = req.body.quantity
    let total_price = req.body.total_price
    if ((user_id === null)) {
        console.log("user must logged in")
        res.send({"status" : "user must logged in"})
    }
    else {
        let sql = 'insert into cart_tbl set ?'
        let cartData = {
            user_id,
            product_id,
            quantity,
            total_price
        }
        db.query(sql, cartData, (err, result)=>{
            if(err) throw err;
            console.log(result)
            res.send({
                "status" : "success add to cart", result})
        })
    }
})

module.exports = router;