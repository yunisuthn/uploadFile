const express = require('express')
const router = express.Router()

var fs = require('fs');
var Item = require('../model/model')


router.post('/api/photo', function (req, res) {
    var newItem = new Item();
    newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
    newItem.img.contentType = 'image/png';
    newItem.save();
});
module.exports = router;
