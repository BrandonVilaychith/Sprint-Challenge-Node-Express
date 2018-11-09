// Imports
const express = require('express');
const projectModel = require('../data/helpers/projectModel.js');

const router = express.Router();

// Gets all projects
router.get('/', (req, res) => {
  projectModel
    .get()
    .then(projects => res.status(200).json(projects))
    .catch(error => {
      res
        .status(500)
        .json({ message: 'There was an error getting the projects', error });
    });
});
// Gets specific project
router.get('/:id', (req, res) => {
  const id = req.params.id;
  projectModel
    .get(id)
    .then(project => {
      if (id === project.id) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'The project could not be found.' });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'There was an error getting the project', error });
    });
});
// Gets actions
router.get('/:id/actions', (req, res) => {
  const id = req.params.id;

  projectModel
    .getProjectActions(id)
    .then(actions => res.send(actions))
    .catch(error => {
      res
        .status(500)
        .json({ message: 'There was an error getting the actions', error });
    });
});
module.exports = router;
