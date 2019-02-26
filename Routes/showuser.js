const router = require('express').Router();
const db = require('../connection')

router.get('/getuser/:user_id', (req, res) => {
let sql = `select * from users_tbl where user_id = ?`
db.query(sql, req.params.user_id, (err, result)=>{
    if (err) throw err;
    res.send(result)
})
    }
)

module.exports = router;