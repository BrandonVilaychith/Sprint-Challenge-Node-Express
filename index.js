// Imports
const server = require('./server.js');

// Server listen on port 8000;
const PORT = 8000;
server.listen(PORT, () => console.log(`Server is now running on port ${PORT}...`));

