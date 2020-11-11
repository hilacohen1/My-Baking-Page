const express = require('express');
const path = require('path');
const requiredData= require('./data.json');
const app = express(); 


app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname,'/views'))


app.get('/', (req,res)=>{
    res.render('home.ejs');
})

app.get('/r/:subreddit', (req,res)=>{
    const { subreddit } =req.params;
    const data =requiredData[subreddit];
    console.log(data);
    res.render('subreddit', {...data});

})
app.get('*', (req,res)=>{
    res.render('notFound.ejs');
})

app.listen(3000,() => {
    console.log("listening to port 3000");
})