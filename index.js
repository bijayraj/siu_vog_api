const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer');

const app = express()
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const upload = multer({ dest: 'uploads/' })

app.get('/', (req, res) => res.send('SIU VOG API WORKS!'))
app.listen(3000, () => console.log('Server ready'))
app.post('/update',upload.single('uploaded_file'), (req,res)=>{
   console.log(req.body);
   console.log(req.file);
   res.send('{"message": "file saved"}');
//    console.log(req)

});