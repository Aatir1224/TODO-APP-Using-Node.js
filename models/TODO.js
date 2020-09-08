const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    date:{
        type:Date,
        
    }
    
},{
   timestamps : true 
});

const TODO = mongoose.model('TODO',todoSchema);

module.exports = TODO;