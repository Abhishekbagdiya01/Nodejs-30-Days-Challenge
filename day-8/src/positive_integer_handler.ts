import Express from "express";

let positiveIntegerHandler = (request: Express.Request, response: Express.Response) => {

    let number = request.query.number
    let num = Number(number)
    if (num >= 0) {
        response.send(`The given number ${number} is a positive integer.`);
    } else {
        throw response.status(400).send(`ERROR : ${response.statusCode} -The given number ${number} is not positive integer.`)
    }
}
export default positiveIntegerHandler