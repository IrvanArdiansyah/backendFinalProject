const router = require('express').Router();
const nodemailer = require('nodemailer')
const xoauth2 = require('xoauth2')
const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arsenic.order@gmail.com',
        type: 'OAuth2',
        clientId: '30448068640-t7hvbrem72b8rqd5qmfp3strbuhbs4oc.apps.googleusercontent.com',
        clientSecret: 'WU9hp45ZXLC4GFV-TsFhvsU7',
        refreshToken: '1/C8SA5QTZl_sJ0Qk6ZFr27tox3oOrO6XcIP88Zr7VuyOWVV1DXce_GHIDLYHVu4qK'
    }  
})

router.post('/email', (req, res)=>{
    console.log(req.body)
    let price = req.body.total_price
    let harga = price.toLocaleString()
    var emailku = {
        from: 'Arsenic Order Notific. <arsenic.order@gmail.com>',
        to: req.body.user_email,
        subject: `Order confirmed: #${req.body.user_id} `,
        text: `Dear ${req.body.first_name} ${req.body.last_name} 

        Your order has been confirmed.
        
        The following is your order:

        Item/Items               : ${req.body.products}
        Quantity                   : ${req.body.quantity}
        Total order amount  : Rp.${harga}

        And will shipping to:

        Address                  : ${req.body.user_address}
        Province                 : ${req.body.province}
        Postcode                : ${req.body.user_postcode} 
                
        Please transfer the total amount of Rp.${harga} to this accounts:
        Bank Mandiri: 101-00-5551102-4 (PT. LIMA MAHAKARYA ABADI)
        Please reply to this e-mail and attach your transfer slip image to speed up the process of your order.
        And attach the transfer slip also on confirm payment page.
        
        We are waiting for your confirmation by replying to this email
        
        Thank you for your kind attention,
        Arsenic`
    }

    sender.sendMail(emailku, (error)=>{
        if(error){
            console.log(error)
            res.send(error)
        } else {
            console.log('Email sukses terkirim!')
            res.send('Email sukses terkirim!')
        }
    })
})



module.exports = router;