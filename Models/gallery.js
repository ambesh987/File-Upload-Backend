const mongoose= require('mongoose');
const gallery= new mongoose.Schema({
    
    'pictures':[{type:Buffer}],
    userId:{type:mongoose.Types.ObjectId, ref:"user"},


})
module.exports= mongoose.model('gallery',gallery);