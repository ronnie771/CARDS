const users = require('/app/routes/users');
const auth = require('./routes/auth');
const cards = require('./routes/cards');
const cors = require('cors');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const path = require('path');
var bodyParser = require('body-parser');


MONGODB_URI  = "mongodb+srv://atlasron:ronm56@cluster0.dmdmk.mongodb.net/my_rest_api?retryWrites=true&w=majority"

mongoose.connect(
 MONGODB_URI,
  {useNewUrlParser: true}
  
).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
  



  app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));



app.use(cors())

if (process.env.NODE_ENV == 'production'){
  app.use(express.static(path.join(__dirname, 'build')));


 

app.get('/', (req, res) => {
  res.send(path.join(__dirname, 'build' ,'index.html'))
}); 
}


app.use('/app/users', users);
app.use('/app/auth', auth);
app.use('/app/cards', cards);



const port = process.env.PORT || 8080;
http.listen(port, () => console.log(`Listening on port ${port}...`));

