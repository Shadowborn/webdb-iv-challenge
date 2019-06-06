// Manage Roles (id, name)
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');


const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

// list all dishes
server.get('/api/dishes', async (req, res) => {
  // get the dishes from the database
  try {
    const dishes = await db('dishes'); // all the records from the table
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a role by id
server.get('/api/dishes/:id', async (req, res) => {
  // get the dishes from the database
  try {
    const role = await db('dishes')
      .where({ id: req.params.id })
      .first();
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json(error);
  }
});

const errors = {
  '19': 'Another record with that value exists',
};

// create dishes
server.post('/api/dishes', async (req, res) => {
  try {
    const [id] = await db('dishes').insert(req.body);

    const role = await db('dishes')
      .where({ id })
      .first();

    res.status(201).json(role);
  } catch (error) {
    const message = errors[error.errno] || 'We ran into an error';
    res.status(500).json({ message, error });
  }
});










// list all recipes
server.get('/api/recipes', async (req, res) => {
    // get the recipes from the database
    try {
      const recipes = await db('recipes'); // all the records from the table
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  // list a role by id
  server.get('/api/recipes/:id', async (req, res) => {
    // get the recipes from the database
    try {
        console.log("Blah", req.params.recipes_id)
      const role = await db('recipes')
        .where({ id: req.params.id })
        .first();
      res.status(200).json(role);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  
  // create recipes
  server.post('/api/recipes', async (req, res) => {
    try {
      const [id] = await db('recipes').insert(req.body);
  
      const role = await db('recipes')
        .where({ id })
        .first();
  
      res.status(201).json(role);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
  });









  // list all ingredients
server.get('/api/ingredients', async (req, res) => {
    // get the ingredients from the database
    try {
      const ingredients = await db('ingredients'); // all the records from the table
      res.status(200).json(ingredients);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  // list a role by id
  server.get('/api/ingredients/:id', async (req, res) => {
    // get the ingredients from the database
    try {
      const role = await db('ingredients')
        .where({ id: req.params.id })
        .first();
      res.status(200).json(role);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  
  // create ingredients
  server.post('/api/ingredients', async (req, res) => {
    try {
      const [id] = await db('ingredients').insert(req.body);
  
      const role = await db('ingredients')
        .where({ id })
        .first();
  
      res.status(201).json(role);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
  });






const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
