// console.log()
console.log("Hello, World!"); 
let name = "Alice";
console.log("Name:", name); 

// console.error()
console.error("This is an error message!"); 

// console.warn()
console.warn("This is a warning message!"); 

// console.info()
console.info("This is an informational message."); 

// console.table()
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];
  console.table(users);
  
//   console.time() and console.timeEnd()
console.time("MyTimer");
// some code execution
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("MyTimer"); 

// console.clear()
console.clear(); // Clears the console output
