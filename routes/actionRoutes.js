// Imports
const express = require('express');
const actionModel = require('../data/helpers/actionModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  const id = req.params.id;

  actionModel
    .get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'There was an error getting the actions.', error });
    });
});

router.post('/', (req, res) => {
  const newAction = req.body;
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res.status(400).json({ message: 'Bad request, missing information' });
  }

  actionModel
    .insert(newAction)
    .then(action => {
      res.status(200).json({ message: 'The action has been added.', action });
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'There was an error adding the action.', error });
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  actionModel
    .remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: 'The action has been deleted' });
      } else {
        res.status(404).json({ message: 'The action could not be found' });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'There was an error deleting the action.', error });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body;

  actionModel
    .update(id, update)
    .then(action => {
      res.status(200).json({ message: 'The action has been updated', action });
    })
    .catch(error => {
      res.status(500).json({
        message: 'There was an error updating the action.',
        error
      });
    });
});
module.exports = router;
