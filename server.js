const express = require('express');
const db = require('./config/db');
const url = require('./routes/url');
const org = require('./routes/index');


//app
const app = express();

//middlewares
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;
//routes
app.use('/',org)
app.use('/api/url',url)
app.listen(PORT,()=>{
    console.log(`server listening at port: ${PORT}`);
})