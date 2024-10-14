# Understanding NPM (Node Package Manager) Installations 🚀

In this guide, we'll explore the concepts of **Global** and **Local** installations in NPM, along with how to **update** and **delete** packages effectively. 😊

---

## 1. NPM Installation Types

### Local Installation

- Local installations occur within the **current project directory**.
- This means that the packages are specifically tied to that project and are stored in the `node_modules/` folder.
- The packages are also listed in the `package.json` file, which keeps track of project dependencies.
- As a result, these packages are only accessible within that specific project.

### Global Installation

- Global installations allow packages to be installed **system-wide**, making them available from any directory in your system.
- This type of installation is useful for command-line tools that you want to use across multiple projects.
- Globally installed packages are stored in a designated global NPM folder (e.g., Linux/Mac: `/usr/local/lib`, Windows: `%APPDATA%\npm`).

---

## 2. Local Installation Example

- When you install a package locally, it becomes part of your project. This allows you to use the package directly within your code.
- However, the package is only accessible in the project where it is installed. If you try to use it in another project, it won't work.

---

## 3. Global Installation Example

- Installing a package globally makes it available for use in any project on your system.
- You can check all globally installed packages to see what tools and libraries you have available for use in any directory.

### Step 1: Install a Package Globally

```bash
npm install -g nodemon
```

- The -g flag indicates a global installation

### Step 2: Check Installed Global Packages

- Lists all globally installed packages

---

## 4. Path Check for Packages

- You can check where global packages are installed using specific commands. This helps you understand where your system is storing these packages.
- Similarly, you can check the path for local packages to see where they are stored within your project's directory.

### Global Path Check

```bash
npm root -g
```

### Local Path Check

```bash
npm root
```

---

## 5. Updating Packages

- Updating local packages ensures that you have the latest version of the dependencies required for your project.
- For global packages, updating ensures that tools and libraries available system-wide are also up-to-date.

### Update a Local Package

```bash
npm update <package-name>
```

### Update a Global Package

```bash
npm update -g <package-name>
```

### Update All Global Packages

```bash
npm update -g
```

### Deleting (Uninstalling) Packages

```bash
npm uninstall <package-name>
```

### Uninstall a Global Package

```bash
npm uninstall -g <package-name>
```

### Checking Package Versions and Installing Specific Versions

```bash
npm list <package-name>
```

### Install a Specific Version of a Package

```bash
npm install <package-name>@<version>
```
