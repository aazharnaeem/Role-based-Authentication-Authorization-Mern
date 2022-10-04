const mongoose = require('mongoose');


mongoose.connect(`mongodb://localhost:27017/role`,{useNewUrlParser:true, useUnifiedTopology:true})

const connectiuon = mongoose.connection

module.exports= connectiuon