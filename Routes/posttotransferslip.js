const router = require('express').Router();
const db = require('../connection')

router.post('/tramsferslip', (req, res) => {
    if (req.files) {
        let transaction_id = req.body.transaction_id
        let file = req.files.transfer_slip
        let imgName = file.name
        let transfer_slip = `http://localhost:3320/Assets/Img/Trfslp/${imgName}`
        file.mv(`./Assets/Img/Trfslp/${imgName}`, (error)=>{
            if (error) throw error;
            let semua = {
                transaction_id,
                transfer_slip
            }
            let sql = 'insert into transfer_slips set ?'
            db.query(sql, semua, (err, result)=>{
                if (err) throw err
                res.send(result)
                console.log(result)
            })
        })
    }
})

module.exports = router;