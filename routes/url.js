const express = require('express');
const router = express.Router();
const config = require('../config/default.json');
const shortid = require('shortid');
const validUri = require('valid-url');


const Url = require('../models/Url');


/**
 * @route  api/url/shorten
 * @dec    create shorturl
 */
router.post('/shorten',async(req,res)=>{
    const {longUrl} = req.body;
    const baseUrl = config.baseUrl;
    //check baseUrl
    if(!validUri.isUri(baseUrl)){
        res.status(401).json('Invalid Url');
    }
    const urlcode = shortid.generate();
    // check long url
    if(validUri.isUri(longUrl)){
        try {
            let url = await Url.findOne({longUrl});
            if(url){
                res.json(url.shortUrl);
            }else{
                const shortUrl = baseUrl+'/'+urlcode;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlcode,
                    date: new Date()
                })
               url =  await Url.create(url);
               res.status(200).json(url.shortUrl);
            }
        } catch (error) {
           console.log(error); 
           res.status(501).json('Server error');
        }
    }else{
        res.status(401).json('Invalid Url');
    }
})

module.exports = router;