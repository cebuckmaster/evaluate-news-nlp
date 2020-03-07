let aylien = require('aylien_textapi');
const dotenv = require('dotenv');

dotenv.config();

console.log(`API Key is ${process.env.API_KEY}`);

    
let textAylianAPI = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


function aylienAPI(textMsg) {
    let json = {
        result : '',
        polarity: '',
        subjectivity: ''
    };

    textAylianAPI.sentiment({
        'text': textMsg
    }, function(error, response) {
        if (error === null) {
            json.result = 'Success';
            json.polarity = response.polarity;
            json.subjectivity = response.subjectivity;
            console.log('json is => '+ JSON.stringify(json));
        } else {
            json.result = 'failure';
        }
    });
    return JSON.stringify(json);

}

module.exports = {
    textAPI: function(msg) {
        return aylienAPI(msg);
    }
};


// module.exports = {
//     textAPI: function(msg) {
//         console.log('textAPI => '+msg);

//         let json = {
//             result : '',
//             polarity: '',
//             subjectivity: ''
//         };
    
//         const responJson = textAylianAPI.sentiment({
//             'text': msg
//         }, function(error, response) {
//             if (error === null) {
//                 json.result = 'Success';
//                 json.polarity = response.polarity;
//                 json.subjectivity = response.subjectivity;
//                 console.log('json is => '+ JSON.stringify(json));
//                 return json;
//             } else {
//                 json.result = 'failure';
//                 return json;
//             }
//         });

//         return responJson;

//     }
//};
// module.exports.textAPI = function (msg) {
//     console.log('textAPI => '+msg);

//     let json = {
//         result : '',
//         polarity: '',
//         subjectivity: ''
//     }
  
//     textAylianAPI.sentiment({
//     'text': msg
//     }, function(error, response) {
//         if (error === null) {
//             console.log(response);
//             console.log(response.polarity);
//             json.result = 'Success';
//             json.polarity = response.polarity;
//             json.subjectivity = response.subjectivity;
//         } else {
//             json.result = 'failure';
//         }
//         console.log('json is => '+ JSON.stringify(json));
//         return json
//     });


// } 
