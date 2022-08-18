const mongoose = require('mongoose');


mongoose.connect(`mongodb://localhost:27017/vp`,{useNewUrlParser:true, useUnifiedTopology:true})

const connectiuon = mongoose.connection

module.exports= connectiuon