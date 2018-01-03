var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var config = require("./config.js")
var $ = require('jquery');
var nodemailer = require('nodemailer');

var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

var smtpTransport = nodemailer.createTransport({
    service: "yahoo",
    secure: false,
    port: 25,
    auth: {
        user: "keithkovachportfolio@yahoo.com",
        pass: config.password
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/html/home.html");
})

app.get('/send',function(req,res){
    var mailOptions={
        to : "kovachks90@gmail.com",
        subject : "Message From Portfolio",
        text : "Entered Email: " + req.query.from + "  Entered Name: " + req.query.name + "  Email Text: " + req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error) {
            console.log(error);
        res.end("error");
        }

        else {
        res.end("sent");
        }
    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});