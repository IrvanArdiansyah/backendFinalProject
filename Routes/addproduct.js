const router = require('express').Router();
const db = require('../connection')

router.post('/products', (req, res) => {
    if (req.files) {
       let product_name = req.body.product_name
       let product_description = req.body.product_description
       let material_description = req.body.material_description
       let product_design = req.body.product_design
       let size = req.body.size
       let dimension = req.body.dimension
       let color = req.body.color
       let stock = req.body.stock
       let price = req.body.price
       let category_id = req.body.category_id
       let product_category_id = req.body.product_category_id
       let file1 = req.files.product_img1
       let file2 = req.files.product_img2
       let file3 = req.files.product_img3
       let file4 = req.files.product_img4
       let imgName1 = file1.name
       let imgName2 = file2.name
       let imgName3 = file3.name
       let imgName4 = file4.name
       let product_img1 = `http://localhost:3320/Assets/Img/${category_id}/${product_category_id}/${imgName1}`
       let product_img2 = `http://localhost:3320/Assets/Img/${category_id}/${product_category_id}/${imgName2}`
       let product_img3 = `http://localhost:3320/Assets/Img/${category_id}/${product_category_id}/${imgName3}`
       let product_img4 = `http://localhost:3320/Assets/Img/${category_id}/${product_category_id}/${imgName4}`
       file2.mv(`./Assets/img/${category_id}/${product_category_id}/` + imgName2)
       file3.mv(`./Assets/img/${category_id}/${product_category_id}/` + imgName3)
       file4.mv(`./Assets/img/${category_id}/${product_category_id}/` + imgName4)
       file1.mv(`./Assets/img/${category_id}/${product_category_id}/` + imgName1, (error)=>{
           if(error){
               console.log(error)
           }else{
               let semua = {
                   product_name,
                   product_img1,
                   product_img2,
                   product_img3,
                   product_img4,
                   product_description,
                   material_description,
                   product_design,
                   size,
                   dimension,
                   color,
                   stock,
                   price,
                   category_id,
                   product_category_id,
               }
               let sql = " INSERT INTO products_tbl set ?"
               db.query(sql,semua,(err, result)=>{
                   if(err){
                       console.log(err)
                   }else{
                       res.send(result)
                       console.log(result)
                   }
               })
           }

       })
    }
})

module.exports = router;