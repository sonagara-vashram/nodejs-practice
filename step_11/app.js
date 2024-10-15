const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// Synchronously (Blocking..)
fs.writeFileSync("step_11/try.txt", "Hii there, ");

console.log(1);
const result = fs.readFileSync("step_11/contacts.txt", "utf-8");
console.log(result);
console.log("2");

// Asynchronously (Non-Blocking..)
fs.readFile("step_11/contacts.txt", "utf-8", (err, result) => {
        console.log(result);
    });
console.log("2");

// Default Thread pool size = 4
