// Import the path module from Node.js's standard library
import path from 'path';

// Define a function that checks if a file has a specific extension
function checkFileExtension (filePath: string, expectedExtension: string) {
    // Get the file extension from file path
    const extName = path.extname(filePath);

    // Check if the file extension matches the expected extension
    if (extName === expectedExtension) {
        // If it does, log a message indicating that the file has the expected extension
        console.log(`File has the expected extension: ${extName}`);
    } else {
        // If it doesn't, log a message indicating that the file does not have the expected extension
        console.log(`File does not has expected extension: ${extName}`);
    }
}

// Check the file extension of a text file
checkFileExtension("./test-file/file1.txt", '.txt');

// Check the file extension of an image file
checkFileExtension("./test-file/image.PNG", '.PNG');

