var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var config = require("./config.js")
var $ = require('jquery');
var nodemailer = require('nodemailer');
var sgMail = require('@sendgrid/mail');
var sg = require("sendgrid")(process.env.SENDGRID_API_KEY);

var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/html/home.html");
})

app.get('/send',function(req,res){
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: {
            personalizations: [
                {
                    to: [
                        {
                            email: 'kovachks90@gmail.com',
                        },
                    ],
                    subject: "Message From Portfolio",
                },
        ],
        from: {
            email: 'kovachkeithportfolio@portfolio.com'
        },
        content: [
            {
                type: 'text/plain',
                value: "Entered Email: " + req.query.from + "  Entered Name: " + req.query.name + "  Email Text: " + req.query.text
            },
        ],
        },
    });

    sg.API(request)
    .then(response => {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    })
    .catch(error => {
        console.log(error.response.statusCode);
    })
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});