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

readFileContent("test-files/file1.txt")
readFileContent("test-files/empty-file.txt")
readFileContent("test-files/nonexistent-file.txt.txt")

