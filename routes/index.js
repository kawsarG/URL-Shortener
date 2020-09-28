const express = require('express');
const router = express.Router();
const Url = require('../models/Url');


router.get('/',(req,res)=>{
    res.render('index.html')
})
/**
 * @route     GET
 * @dec      Get original link from shortcode
 */
router.get('/:code',async(req,res)=>{
   try {
       let url = await Url.findOne({urlcode:req.params.code});
       if(url){
            return res.redirect(url.longUrl);
       }else{
            res.status(404).json('No url found');
       }
   } catch (error) {
       console.log(error);
       res.status(500).json('server errror');
   }
})

module.exports = router;