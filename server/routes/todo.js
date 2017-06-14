var express = require('express');
var router = express.Router();

// Connects to database
const knex = require('../db/knex');

/* Mounted at http://localhost:3000/todo */
router.get('/', function(req, res, next) {
  knex('todo')
  .select()
  .then(todos => {

    res.render('all', { todos: todos });
  });

});

module.exports = router;
