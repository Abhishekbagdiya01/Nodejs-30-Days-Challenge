import express from "express";
let appLogger = (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const method = request.method
    const timeStamp = new Date().toLocaleTimeString()
    console.log(`${timeStamp} - ${method} request received`);
    next();
}

export default appLogger