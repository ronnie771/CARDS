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

mongodb+srv://atlasron:ronm56@cluster0.dmdmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/my_rest_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
  
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

  app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.send(path.join(__dirname, 'build', 'index.html'))
});
 
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/cards', cards);




const port = process.env.PORT || 3000;
http.listen(port, () => console.log(`Listening on port ${port}...`));