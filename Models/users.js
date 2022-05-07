const mongoose= require('mongoose');
// const { stringify } = require('nodemon/lib/utils');
const user= new mongoose.Schema({
    
    'firstName':{type:String},
    'lastName':{type:String},
    'profileImages':[{type:Buffer}]
})
module.exports= mongoose.model('user',user);