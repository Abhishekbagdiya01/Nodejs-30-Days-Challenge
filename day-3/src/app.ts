import cp from "child_process"

function executeCommand (command: string) {
    try {
        let response = cp.execSync(command)
        console.log(response.toString());
    } catch (error) {
        console.log(error);
    }

}
executeCommand('dir')
executeCommand('echo "Hello, Node.js!"')