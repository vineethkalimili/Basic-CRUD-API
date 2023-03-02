const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    userWalletAddress:{
        type:String,
        required:true
    },
    KYCStatus:{
        type:String,
        required:true
    },
    AMLStatus:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Datas',dataSchema);