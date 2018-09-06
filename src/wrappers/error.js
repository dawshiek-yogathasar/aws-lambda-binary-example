class Error {

    constructor(values) {
        for (let id in values) {
            if (Error.schema[id] != undefined
                && typeof values[id] === Error.schema[id]) {
                this[id] = values[id];
            }
        }
    }

    static get schema() {
        return {
            "statusCode": "number",
            "errorType": "string",
            "message": "string",
            "requestId": "string",
            "result": "string"
        };
    }

    static get headers() {
        return {
            "X-Requested-With": '*',
            "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
            "Access-Control-Allow-Origin": '*',
            "Access-Control-Allow-Methods": 'POST,GET,OPTIONS'
        };
    }

    static BadRequest(context, message) {
        return new Error({
            statusCode: 400,
            errorType : "Bad Request",
            message: message || "Bad Request Exception",
            requestId : context.awsRequestId,
            result: "error"});
    }

    static Unauthorised(context, message) {
        return new Error({
            statusCode: 401,
            errorType : "Unauthorized",
            message: message || "Unauthorized Exception",
            requestId : context.awsRequestId,
            result: "error"});
    }

    static AccessDeniedRequest(context, message) {
        return new Error({
            statusCode: 403,
            errorType : "Access Denied",
            message: message || "Access Denied Exception",
            requestId : context.awsRequestId,
            result: "error"});
    }

    static FileNotFound(context, message) {
        return new Error({
            statusCode: 404,
            errorType : "Not Found",
            message: message || "Not Found Exception",
            requestId : context.awsRequestId,
            result: "error"});
    }

    static Conflict(context, message) {
        return new Error({
            statusCode: 409,
            errorType : "Conflict",
            message: message || "Conflict Exception",
            requestId : context.awsRequestId,
            result: "error"});
    }

    static TooManyRequests(context, message) {
        return new Error({
            statusCode: 429,
            errorType : "Too Many Requests",
            message: message || "Too Many Requests Exception",
            requestId : context.awsRequestId,
            result: "error"});
    }

    static ServiceUnavailable(context, message) {
        return new Error({
            statusCode: 503,
            errorType : "Service Unavailable",
            message: message || "Service Unavailable Exception",
            requestId : context.awsRequestId,
            result: "error"});
    }

    static InternalServerError(context, message) {
        return new Error({
            statusCode: 500,
            errorType : "Internal Server Error",
            message: message || "Internal Server Error",
            requestId : context.awsRequestId,
            result: "error"});
    }

    static TimedOut(context, message) {
        return new Error({
            statusCode: 504,
            errorType : "Endpoint Request Timed-out",
            message: message || "Endpoint Request Timed-out Exception",
            requestId : context.awsRequestId,
            result: "error"});
    }

    response() {
        return {
            statusCode: this.statusCode,
            headers: Error.headers,
            body: JSON.stringify({
                errorType : this.errorType,
                message: this.message,
                requestId: this.requestId,
                result: this.result
            })
        };
    }

}

module.exports = Error;
