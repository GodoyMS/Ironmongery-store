const mongoose = require('mongoose');
const URI = 'mongodb+srv://peruvalmundial:liamg31072001@cluster0.mqlgpet.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI, {
    serverSelectionTimeoutMS: 5000
  }).catch(err => console.log(err.reason));

  module.exports=mongoose;