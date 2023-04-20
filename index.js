const express = require('express');

const { db } = require('./config.js');
const app = express()

app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

//GET
app.get('/',(req,res)=>{
        res.render('index')
});

//POST
app.post('/',async (req,res) => {
    console.log(req.body);
    await db.collection('users').doc().set(req.body);
    res.redirect('/#save');
});
app.listen(3000,()=>console.log("Running Server...."))