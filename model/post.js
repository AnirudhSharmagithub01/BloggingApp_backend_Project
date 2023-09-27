const mongoose = require('mongoose');

const post = new mongoose.Schema({

    title:{
        type:String,
        required: true,
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'like',
    }],

    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
    }],

    createAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },

    updateAt:{
        type:Date,
        required:true,
        default:Date.now(),
    }
});

module.exports = mongoose.model("post",post);