const users = require('./routes/users');
const auth = require('./routes/auth');
const cards = require('./routes/cards');
const cors = require('cors');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const path = require('path');
var bodyParser = require('body-parser');

<<<<<<< HEAD

const uri = "mongodb+srv://atlasron:ronm56@cluster0.dmdmk.mongodb.net/my_rest_api?retryWrites=true&w=majority"
=======
const uri = process.env.MONGODB_URI;
>>>>>>> 16182a238b358a807b149acd618ac6f1f3dd8f3d
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
  
<<<<<<< HEAD
  app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));



app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));
=======
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

  app.use(express.static(path.join(__dirname, 'build')));
>>>>>>> 16182a238b358a807b149acd618ac6f1f3dd8f3d

app.get('/', (req, res) => {
  res.send(path.join(__dirname, 'build', 'index.html'))
});
 
<<<<<<< HEAD
app.use('/users', users);
app.use('/auth', auth);
app.use('/cards', cards);



const port = 3000 ;
http.listen(port, () => console.log(`Listening on port ${port}...`));

=======
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/cards', cards);




const port = process.env.PORT ;
http.listen(port, () => console.log(`Listening on port ${port}...`));
>>>>>>> 16182a238b358a807b149acd618ac6f1f3dd8f3d
