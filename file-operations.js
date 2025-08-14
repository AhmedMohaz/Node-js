
const fs = require('fs');

// Create welcome.txt with "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node', 'utf8');
console.log("welcome.txt created");

// Read and log content from welcome.txt
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log("File content:", data);
