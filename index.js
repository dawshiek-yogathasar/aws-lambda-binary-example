/*
    Generic Handler
*/
var getImage = require("./src/getImage.js");
var getPdf = require("./src/getPdf.js");

exports.exampleImage = function(event, context, callback) {
    try {
        getImage.getStockImage(event, responseHandler(context, callback));
    } catch (ex) {
        console.log(`FATAL: Error processing request ${e}`);
        callback({result:'error', message:`Error processing request ${e}`});
    }
};

exports.examplePdf = function(event, context, callback) {
    try {
        getPdf.getStockPDF(event, responseHandler(context, callback));
    } catch (ex) {
        console.log(`FATAL: Error processing request ${e}`);
        callback({result:'error', message:`Error processing request ${e}`});
    }
};

function responseHandler(context, callback) {
    return function(err, result) {
        if (err) {
            callback(err);
        } else {
            if (result.constructor.name === "Error" || result.constructor.name === "Success") {
                  callback(null, result.response(context));
            } else {
                  callback(null, result);
            }
        }
    }
}