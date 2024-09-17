const mongoose = require('mongoose');

async function connect(){
  try{
   let connection = await mongoose.connect('mongodb://localhost:27017/testdb');
    console.log('Connected to MongoDB');
  }catch(e){console.error(e);}
}

module.exports = connect;