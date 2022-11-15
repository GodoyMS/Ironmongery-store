const express= require('express');
const morgan=require('morgan');
const app=express();



const {mongoose} = require('./database');
const path=require('path');
//settings
app.set('port',process.env.PORT || 3000);
//middle wares
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/tasks',require('./routes/task-routes'));

//static files

app.use(express.static(path.join(__dirname,'public')))//console.log(path.join(__dirname,'public'));//console.log(__dirname+'\public')
//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })