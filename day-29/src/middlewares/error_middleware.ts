import express from "express";

function errorHandler (error: any, request: express.Request, response: express.Response, next: express.NextFunction) {
    // Your implementation here
    error.statusCode = error.statusCode || 500
    error.status = error.status || "error"
    response.status(error.statusCode).json({
        status: error.status,
        message: error.message || "Something went wrong"
    })
}
export default errorHandler;