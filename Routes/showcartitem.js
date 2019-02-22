const router = require('express').Router();
const db = require('../connection')

router.get('/cartitem/:user_id', (req, res)=>{
    let sql = `SELECT * FROM cart_merger WHERE user_id = '${req.params.user_id}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        // console.log(result);
        res.send(result);
    });
});

module.exports = router;