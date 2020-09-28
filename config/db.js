const mongoose = require('mongoose');
const config = require('./default.json');

mongoose.connect(config.URI,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{ console.log('mongoose connected')})
    .catch(err=>{
        console.log(err);
    })