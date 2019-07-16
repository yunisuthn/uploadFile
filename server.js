var express = require('express');

var pathModule = require('path');
var fs = require('fs');
var multer = require('multer');
const PORT = 8080;
var mongoose = require('mongoose');

const config = require('./config/dbConfig');
var app=express();

mongoose.Promise = global.Promise;
mongoose.connect(config.url, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
app.use(multer({dest:__dirname+'/file/uploads/'}).any());
var NItem = mongoose.Schema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
var Item = mongoose.model('image', NItem);
app.post('/upload',function(request,res){
    // var readerStream = fs.createReadStream(request.files[0].path);
    // var dest_file = pathModule.join(request.files[0].destination, request.files[0].originalname);
    // var writerStream = fs.createWriteStream(dest_file);

    // var stream = readerStream.pipe(writerStream);
    // stream.on('finish', function(){
    //     fs.unlink(request.files[0].path);
    // });
    var newItem = new Item();
    ///newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
    // newItem.img.contentType = 'image/png';
    newItem.save();
    console.log(request.files);

    // res.redirect('/');

});

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });
/* var express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;
const cors = require('cors');


var mongoose = require('mongoose');
const config = require('./config/dbConfig');
var Schema = mongoose.Schema;
var multer = require('multer');

const businessRoute = require('./routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect(config.url, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', businessRoute)

// app.use(multer({
//     dest: './uploads/',
//     rename: function (filename) {
//         return filename;
//     },
// }));
app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
}); */