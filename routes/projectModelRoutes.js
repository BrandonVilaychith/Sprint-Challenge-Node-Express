// Imports
const express = require('express');
const projectModel = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  projectModel
    .get()
    .then(projects => res.status(200).json(projects))
    .catch(error => {
      res.status(500).json({ message: 'There was an error getting the projects', error })
    })
})

