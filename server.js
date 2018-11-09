// Express import
const express = require('express');
const middlewareConfig = require('./middleware/middlewareConfig.js');
const projectModelRoutes = require('./routes/projectModelRoutes.js');
const actionRoutes = require('./routes/actionRoutes.js');
// Define the server
const server = express();

// Middleware
middlewareConfig(server);

// Routes
server.use('/api/projects', projectModelRoutes);
server.use('/api/actions', actionRoutes);

// Export the server
module.exports = server;
