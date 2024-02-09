/*

Which of the following are examples of node modules?

                a. Express

                b. Body-parser

                c. Socket.io

                d. All of the above

    correct answer is D
*/
import * as promptSync from 'prompt-sync'
const prompt = promptSync()
console.log("Which of the following are examples of node modules? \n a. Express  \n b. Body-parser \n c. Socket.io \n d. All of the above")
let ans: string = prompt("Choose an option ")
if (ans === "d" || ans === "D") {
    console.log("Yey! your answer is correct ");
} else {
    console.log("Sorry your answer is wrong correct answer is d");
}

