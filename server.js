// Express import
const express = require('express');
const middlewareConfig = require('./middleware/middlewareConfig.js');
// Define the server
const server = express();

// Middleware
middlewareConfig(server);

// Routes

// Export the server
module.exports = server;

