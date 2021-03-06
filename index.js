const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

var fs = require('fs');
var dir = '/tmp/uploads';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}


app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => res.send('SIU VOG API WORKS!'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server ready'));

const storage = multer.diskStorage(
   {
       destination: '/tmp/uploads/',
       filename: function ( req, file, cb ) {
           //req.body is empty...
           cb( null, 'audio'+ '-' + Date.now()+".wav");
       }
   }
);

const upload = multer( { storage: storage } );


app.post('/update',upload.single('file'), (req,res)=>{
   console.log(req.body);
   console.log(req.file);
   res.send('{"message": "file saved"}');
//    console.log(req)

});