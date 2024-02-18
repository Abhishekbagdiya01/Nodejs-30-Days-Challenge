import express from "express";
let appLogger = (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const method = request.method
    const timeStamp = new Date().toLocaleTimeString()
    const url: string = request.url;
    const header = request.header || ""
    const body: string = request.body || {}
    const ip = request.ip
    console.log(`method : ${method} || url : ${url} || timestamp : ${timeStamp} || ip : ${ip}
    || body : ${body}  || header : ${header}`);
    next();
}

export default appLogger

