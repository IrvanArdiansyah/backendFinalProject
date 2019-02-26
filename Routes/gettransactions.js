const router = require('express').Router();
const db = require('../connection')

router.get('/transaction', (req, res)=>{
    let sql = `SELECT * FROM transactions_tbl where status = 'not paid'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

router.get('/transactions', (req, res)=>{
    let sql = `SELECT * FROM transactions_tbl join transfer_slips on transfer_slips.transaction_id = transactions_tbl. transaction_id where status = 'not paid'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


router.get('/transactions/:user_id', (req, res)=>{
    let sql = `SELECT * FROM transactions_tbl where user_id = ${req.params.user_id} and status = 'not paid'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

module.exports = router;