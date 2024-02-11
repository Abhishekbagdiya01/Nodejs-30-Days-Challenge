import express from "express";
import jtwToken from "jsonwebtoken"

/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticationMiddleware (request: express.Request, response: express.Response, next: express.NextFunction) {

    const authHeader = request.headers.authorization;
    if (!authHeader) {
        response.status(401).send({ error: 'Unauthorized status.' });
    }
    const token: string = authHeader!.split('')[1]
    console.log(token);
    jtwToken.verify(token, "secretOrPublicKey", (error) => {
        if (error) {
            return response.status(401).json({ message: 'Invalid or expired token.' });
            next();
        }
    })

    next();
}
export default authenticationMiddleware