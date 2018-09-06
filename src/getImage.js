

/*
    AWS Lambda Binary Image Example 
*/

'use strict'
const request = require('request');
const error = require("./wrappers/error");

exports.getStockImage = function(request, callback) {
    console.log('Received request getStockImage:', JSON.stringify(request, null, 2));

    getStockImageCall().then((response) => {
        console.log(`Request response content type: ${response.contenttype}`);

        let responseBuilder = {
            statusCode: 200,
            headers: {
                'content-type': response.contenttype,
                'transfer-encoding': 'chunked'
            },
            body: response.data.toString('base64'),
            isBase64Encoded: true
        };
        callback(null, responseBuilder);
    }).catch((err) => {
        console.log(`Error with request: ${err}`);
        callback(null, error.InternalServerError("Error processing request"))
    })
}


function getStockImageCall() {
    console.log('Request processing via getStockImageCall');

    let requestObject = {
        url: process.env.GET_EXAMPLE_IMAGE,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        }
    };

    return new Promise((resolve, reject) => {
        request(requestObject).on('response', function(response) {
              var chunks = [];
              let contentType = response.headers['content-type'];

              response.on('data', function(chunk){
                  chunks.push(chunk);
              });

              response.on('end', function(){
                var finalData = new Buffer.concat(chunks);
                resolve({data: finalData, contenttype: contentType});
              })
        })
    })
}