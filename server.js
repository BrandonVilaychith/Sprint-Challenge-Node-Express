// Express import
const express = require('express');
const middlewareConfig = require('./middleware/middlewareConfig.js');
const projectModelRoutes = require('./routes/projectModelRoutes.js');
// Define the server
const server = express();

// Middleware
middlewareConfig(server);

// Routes
server.use('/api/projects', projectModelRoutes);

// Export the server
module.exports = server;
