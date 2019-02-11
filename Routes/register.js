const router = require('express').Router();
const db = require('../connection')

router.post('/register', (req, res)=>{
    let userRegister = req.body
    let email = req.body.user_email
    let password = req.body.user_password
    if ((email && password) == null) {
        res.send("form must be complete")
    }
    else { 
        let sql = `SELECT user_email FROM users_tbl WHERE user_email = '${req.body.user_email}'`;
        db.query(sql, (err, result) => {
            if (err) {
                throw err
            } else if (result.length > 0) {
                res.send('email has been registered')
            } else {
                let sql = 'insert into users_tbl set ?'
                db.query(sql, userRegister, (err, result)=>{
                    if(err) throw err;
                    console.log(result);
                    res.send({
                        "status": "ok",
                        "message": "successfully registered"
                    });
                });
            }
        }) 
    }
    
});

module.exports = router;