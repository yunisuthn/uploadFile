const mongoose = require('mongoose')
var Item = mongoose.Schema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  module.exports = mongoose.model('image', Item);