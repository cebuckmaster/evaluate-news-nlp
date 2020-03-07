var path = require('path');
const express = require('express')
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');

dotenv.config();

let aylianAPI = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

const cors = require('cors');

app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Server listening on port 8081!')
})

app.get('/evalText', getTextSentiment);
app.get('/evalURL', getURLSentiment);

//----------------------------------------------------------------------
function getTextSentiment(req, res) {

    let json = {
        result : '',
        polarity: '',
        subjectivity: ''
    };

    aylianAPI.sentiment({
        'text': req.query.text
    }, function(error, response) {
        if (error === null) {
            json.result = 'Success';
            json.polarity = response.polarity;
            json.subjectivity = response.subjectivity;
            res.send(JSON.stringify(json));
        } else {
            json.result = 'failure';
            res.send(JSON.stringify(json));
        }
    });
    

}
//----------------------------------------------------------------------
function getURLSentiment(req, res) {

    let json = {
        result : '',
        polarity: '',
        subjectivity: ''
    };

    aylianAPI.sentiment({
        'url': req.query.url
    }, function(error, response) {
        if (error === null) {
            json.result = 'Success';
            json.polarity = response.polarity;
            json.subjectivity = response.subjectivity;
            res.send(JSON.stringify(json));
        } else {
            json.result = 'failure';
            res.send(JSON.stringify(json));
        }
    });
    

}
