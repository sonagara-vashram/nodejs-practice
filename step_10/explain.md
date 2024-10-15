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

## Explanation of `fs` Module Operations in Node.js

---

### 1. **Importing the `fs` Module**  

The `fs` module allows interaction with the file system, enabling tasks such as reading, writing, and deleting files.

---

### 2. **Synchronous File Write**  

The `writeFileSync` function creates a file and writes the specified content to it. If the file already exists, its content is replaced. This operation is **blocking**, meaning the program waits until the writing is complete.

---

### 3. **Asynchronous File Write**  

The `writeFile` function writes content to a file in the background, using a callback to handle errors. This operation is **non-blocking**, meaning the program can continue running without waiting for the write to finish.

---

### 4. **Synchronous File Read**  

The `readFileSync` function reads the entire content of a file and returns it. This operation blocks further code execution until the reading is completed.

---

### 5. **Asynchronous File Read**  

The `readFile` function reads the file content asynchronously. It takes a callback to handle errors and access the file content once it is read.

---

### 6. **Appending to a File**  

The `appendFileSync` function adds new content at the end of an existing file. It creates the file if it does not already exist.

---

### 7. **Copying a File**  

The `cpSync` function copies the content from one file to another. This operation blocks further code execution until the copy is complete.

---

### 8. **Deleting a File**  

The `unlinkSync` function deletes a specified file from the file system. It waits until the operation completes.

---

### 9. **Reading a Directory**  

The `readdirSync` function retrieves a list of all files and directories within a specified directory. This operation is synchronous, so it blocks the program.

---

### 10. **Getting File Stats**  

The `statSync` function returns metadata about a file, such as size and creation date.

---

### 11. **Renaming a File**  

The `renameSync` function changes the name of a file. The program waits until the rename operation completes.

---

### 12. **Creating a Directory**  

The `mkdirSync` function creates a new directory. If the directory already exists, an error is thrown.

---

### 13. **Renaming a Directory**  

The `renameSync` function also works with directories, allowing you to rename an existing directory.

---

### 14. **Deleting a Directory**  

The `rmdirSync` function removes an empty directory from the file system. If the directory contains files, an error is thrown.
