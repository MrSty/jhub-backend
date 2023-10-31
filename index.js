const express = require("express");
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jobRouter = require('./routes/Job')

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Conected to jhub on mongodb'))
.catch((error)=>console.log(error))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/jobs', jobRouter)


app.get('/', (req, res) => res.send('Hello world'));
app.listen(process.env.PORT || port, ()=> console.log(`Example on port ${process.env.PORT}`));

