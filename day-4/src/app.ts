import path from "path";

function resolvePath (relativePath: string) {
    const absolutePath = path.resolve(relativePath);
    console.log(absolutePath);
}
resolvePath("./file.txt")
resolvePath("nonexistent-folder/file.txt")
