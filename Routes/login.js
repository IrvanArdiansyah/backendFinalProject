const router = require('express').Router();
const db = require('../connection')

router.post('/login', (req, res) => {
    let email = req.body.user_email
    let password = req.body.user_password
    console.log(email)
    console.log(password)
    if ((email && password) == null) {
        res.send("form must be complete")
    }
    else {
        let sql = `SELECT * FROM users_tbl WHERE user_email = '${req.body.user_email}'`;
        db.query(sql, (err, result) => {
            if (err) {
                throw err
            } 
            else if (result == 0) {
                console.log(result)
                res.send({"status" : "email doesnt exist"})
            }
             else {
                if (req.body.user_password != result[0].user_password) {
                    console.log(result)
                    res.send({"status" : "password was incorect"})
                } else if (req.body.user_email != result[0].user_email) {
                    console.log(result)
                    res.send({"status" : "email doesnt exist"})
                } 
                else {
                    console.log(result)
                    res.send({
                        "status": "login success",  result
                })
                }
            }
        }
        )
    }
})

module.exports = router;