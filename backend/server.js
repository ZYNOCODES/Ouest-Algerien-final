require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersroutes = require('./routes/users');
var path = require('path');
const bodyParser = require("body-parser");
 
//express app
const app = express();

//midleware
const tempelatePath = path.join(__dirname, '/views')
const publicPath = path.join(__dirname, '/views/css')
console.log(publicPath);

app.set('view engine','html')
app.set('views',tempelatePath)

app.use(bodyParser.json())
app.use(express.static(publicPath))
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/user', usersroutes); 

app.get("/", (req, res) => {
    res.sendFile(tempelatePath + "/Home/index.html");
});

app.get("/Documents", (req, res) => {
    res.sendFile(tempelatePath + "/Documents/index.html");
});

app.get("/Contact", (req, res) => {
    res.sendFile(tempelatePath + "/Contact/index.html");
});

app.get("/Login", (req, res) => {
    res.sendFile(tempelatePath + "/Login/index.html");
});

app.get("/user", (req, res) => {
    res.sendFile(tempelatePath + "/Admin/index.html");
});

//connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connect to database and listening on port ', process.env.PORT);
        });
    }).catch((err) => {
        console.log('error connecting to db', err);
});

