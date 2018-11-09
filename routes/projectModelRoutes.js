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
// Adds projects
//! Validation middleware needs to be created
router.post('/', (req, res) => {
  const newProject = req.body;
  const { name, description } = req.body;
  // Checks if name and description are in the request
  if (!name || !description) {
    res.status(400).json({ message: 'Bad request missing information.' });
  }

  projectModel
    .insert(newProject)
    .then(project => {
      res
        .status(200)
        .json({ message: 'A new project has been added', project });
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'There was an error adding the project', error });
    });
});
// Deletes project
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  projectModel
    .remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: 'Project has been deleted.' });
      } else {
        res.status(404).json({ message: 'The project could not be found' });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'There was an error deleting the project', error });
    });
});
// Updates project
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body;

  projectModel
    .update(id, update)
    .then(project => {
      res.status(200).json({ message: 'Project has been updated', project });
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'There was an error updating the project.', error });
    });
});
module.exports = router;
