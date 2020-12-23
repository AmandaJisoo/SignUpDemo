const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routesURL = require('./routes/routes');
const cors = require('cors');

// dotenv.config();
//emv file has a problem
mongoose.connect("mongodb+srv://Nigerian:Nigerian@cluster0.t3yur.mongodb.net/mytable?retryWrites=true&w=majority", 
() => console.log("Amanda DB connected"));

mongoose.connect(process.env.D, () => console.log("DB connected"));


app.use(express.json())
app.use(cors())
app.use('/app', routesURL)
// port 4000
app.listen(4000, () => console.log("server is up and running"));

