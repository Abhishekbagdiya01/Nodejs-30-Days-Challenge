import fs from 'fs'
async function readFileContent (filePath: string) {
    let result = await fs.promises.readFile(filePath)
    try {
        let result = await fs.promises.readFile(filePath)
        if (result.length === 0) {
            console.log("empty string")
        } else {
            console.log(`${result}`)
        }
    } catch (error) {
        if (error === 'ENOENT') {
            console.log('File not found.')
        } else {
            console.log("Something went wrong")
        }
    }
}

async function writeToFile (filePath: string, content: string) {

    try {

        fs.promises.access(filePath, fs.constants.F_OK).then(exist => {
            let result = fs.promises.writeFile(filePath, content)
            console.log("File written successfully");
        })
    } catch (error) {
        if (error === 'ENOENT') {
            console.log('File not found.')
        } else {
            console.log("Something went wrong")
        }
    }
}
writeToFile("test-files/output1.txt", "This is day 2 of 30 days nodejs challenge")
readFileContent("test-files/output1.txt")
writeToFile("test-files/output22.txt", "This is day 2 of 30 days nodejs challenge")


