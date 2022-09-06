const express = require('express');
const cors =require('cors');
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('./server/route/person.routes')(app); // This is new
require('./server/config/mongoose.config');
const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`) );