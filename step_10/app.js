const fs = require("fs");

// Sync..
fs.writeFileSync("./try.txt", "Hello World!");

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