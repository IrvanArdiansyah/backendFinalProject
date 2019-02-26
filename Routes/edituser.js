const router = require('express').Router();
const db = require('../connection')

router.put('/userupdate/:user_id', (req, res) => {
let userupdate = req.body
let sql = `update users_tbl set ? where user_id = ${req.params.user_id}`
db.query(sql, userupdate, (err, result)=>{
    if (err) throw err;
    res.send(result)
})
    }
)

module.exports = router;