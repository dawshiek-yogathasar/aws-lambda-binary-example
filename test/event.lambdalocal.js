/* 
    Test Commands to run Lambda-Local https://www.npmjs.com/package/lambda-local
    
    lambda-local -l index.js -h exampleImage -e test/event.lambdalocal.js -t 60
    lambda-local -l index.js -h examplePdf -e test/event.lambdalocal.js -t 60  
*/
process.env["GET_EXAMPLE_IMAGE"] = "https://www.google.com.au/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
process.env["GET_EXAMPLE_PDF"] = "https://d1.awsstatic.com/whitepapers/architecture/AWS-Serverless-Applications-Lens.pdf"

module.exports = {
    "resource": "/",
    "path": "",
    "httpMethod": "GET",
    "headers": null,
    "queryStringParameters": null,
    "pathParameters": {},
    "stageVariables": null,
    "requestContext": {
        "path": "/",
        "accountId": "094551496269",
        "resourceId": "0hjofm",
        "stage": "test-invoke-stage",
        "requestId": "test-invoke-request",
        "identity": {
            "cognitoIdentityPoolId": null,
            "cognitoIdentityId": null,
            "apiKey": "test-invoke-api-key",
            "cognitoAuthenticationType": null,
            "userArn": "arn:aws:sts::123456789:assumed-role/foobarcompany/testuser",
            "apiKeyId": "test-invoke-api-key-id",
            "userAgent": "aws-internal/3",
            "accountId": "094551496269",
            "caller": "AROAJ6HPWTDHJSDJJB42YHK:foobarcompany",
            "sourceIp": "test-invoke-source-ip",
            "accessKey": "ASIAIUJA5HWIHBGSYV6Q",
            "cognitoAuthenticationProvider": null,
            "user": "AROAJ6HPWTDHJSDJJB42YHK:foobarcompany"
        },
        "resourcePath": "/",
        "httpMethod": "GET",
        "extendedRequestId": "test-invoke-extendedRequestId",
        "apiId": "ybm8bpxr3k"
    },
    "body": null,
    "isBase64Encoded": false
}
