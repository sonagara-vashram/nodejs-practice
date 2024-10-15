const fs = require("fs");

// Sync..
fs.writeFileSync("step_10/try.txt", "Hello World!");

// Async..
fs.writeFile("step_10/try.txt", "Hello World! and hello coders", (err) =>{}) // Create a new file and write the content in it.

// Sync..
const result = fs.readFileSync("step_10/contacts.txt", "utf-8");
console.log(result);

// Async..
fs.readFile("step_10/contacts.txt", "utf-8", (err, result) => {
    if (err){
        console.log("error ", err);
    }else{
        console.log("File content: ", result);
    }
})


// Append File
fs.appendFileSync("step_10/try.txt", `Hey there, \n`);

// Copy File
fs.cpSync('step_10/try.txt', "step_10/copy.txt");

// Delete File
fs.unlinkSync('step_10/copy.txt');

// Read Directory
const files = fs.readdirSync('step_10');

console.log(fs.statSync("step_10/renamed.txt"));

// Rename File
fs.renameSync('step_10/try.txt', 'step_10/renamed.txt');

// Directory
fs.mkdirSync('step_10/newDir');

// Rename Directory
fs.renameSync('step_10/newDir', 'step_10/renamedDir');

// Delete Directory
fs.rmdirSync('step_10/renamedDir');

console.log("File operation complete..!");