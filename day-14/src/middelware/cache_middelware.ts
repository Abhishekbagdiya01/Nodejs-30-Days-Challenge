import express from "express"
import apicache from "apicache"



export function cachingMiddleware (request: express.Request, response: express.Response, next: express.NextFunction) {
    let cache = apicache.middleware()
    cache("5 minutes")
    next();
}