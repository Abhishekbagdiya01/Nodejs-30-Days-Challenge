import express from "express";
function authenticateAndAuthorize (permissions: Array<string>) {

    return (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const userRole = request.body.role;

        if (!userRole) {
            response.status(401).send("Unauthorized status")
        } else {
            if (permissions.includes(userRole)) {
                if (userRole === "admin") {
                    console.log("welcome admin");
                } else {
                    console.log("welcome role", userRole);
                }

                next();
            }
            else {
                response.status(401).send("You are not authorized to view this page");
            }
        }
    }
}
export default authenticateAndAuthorize;