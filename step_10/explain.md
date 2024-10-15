# File Handling with `fs` Module in Node.js

The **`fs` module** provides methods to interact with the file system, such as reading, writing, and deleting files.

---

## Synchronous vs Asynchronous Operations

- **Synchronous (Sync):**  
  - Blocks further code execution until the operation completes.  
  - Slows the application if the operation is time-consuming.  
  - Example: `fs.writeFileSync()`, `fs.readFileSync()`.

- **Asynchronous (Async):**  
  - Runs in the background, allowing other code to execute simultaneously.  
  - A **callback** is triggered once the operation completes.  
  - Example: `fs.writeFile()`, `fs.readFile()`.

---

## Writing Files

- **Synchronous Write (`fs.writeFileSync`)**:  
  - Writes data to a file immediately and blocks the thread until complete.  
  - If the file already exists, it **overwrites** the content.  
  - Used when you need to ensure the file is written before continuing with the next operation.

- **Asynchronous Write (`fs.writeFile`)**:  
  - Writes data to a file in the background without blocking code execution.  
  - Uses a **callback function** to handle success or errors.  
  - Ideal for applications that require non-blocking I/O.

---

## Reading Files

- **Synchronous Read (`fs.readFileSync`)**:  
  - Reads the content of a file **synchronously**.  
  - Blocks execution until the file is completely read.  
  - If the file doesn’t exist, an error is thrown.

- **Asynchronous Read (`fs.readFile`)**:  
  - Reads the content of a file **asynchronously** in the background.  
  - Uses a **callback function** to return the result or handle errors.  
  - Prevents blocking, ensuring the rest of the code continues to execute.

---

## Error Handling in Asynchronous Operations

- In async methods, errors are handled using **callback functions**.  
  - Example: If the file or folder doesn't exist, the error is passed to the callback.  
  - Always **check for errors** inside the callback to avoid crashes.

---
