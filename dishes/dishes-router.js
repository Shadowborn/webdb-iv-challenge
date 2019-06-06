// const knex = require('knex');

// const router = require('express').Router();
// const Zoos = require('./dishes-model.js');
// //install knex and driver
// // configure knex and get a connection to the db

// const knexConfig = {
//   client: 'sqlite3',
//   connection: {
//     filename: './data/recipes.db3'
//   },
//   useNullAsDefault: true,// required only for sqlite3
//   debug: true
// }

// const db = knex(knexConfig);

// router.get('/', (req, res) => {
//   // get the zoos from the database
//   Zoos.find()
//     .then(zoos => {
//       res.status(200).json(zoos)
//     })
//     .catch(error => {
//     res.status(500).json(error)
//     })
// });

// router.get('/:id', (req, res) => {
//   // retrieve a zoo by id
//   Zoos.findById(req.params.id)
  
//     .then(zoo => {
//       if (zoo){
//         res.status(200).json(zoo)
//       } else {
//       res.status(404).json({ message: 'zoo not found'});
//       }
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

// router.post('/', (req, res) => {
//   // add a zoo to the database
//   Zoos.add(req.body, 'id')
//     // .insert(req.body, 'id')
//     .then(ids => {
//         res.status(201).json(ids);
//   }).catch(error => {
//         res.status(500).json(error);
//   });
// });

// // router.put('/:id', (req, res) => {
// //   // update zoos
// //   const changes = req.body; // {name: 'Student'} 
// //   Zoos.update(req.params.id, req.body)
// // //   .where({id: req.params.id})
// // //   .update(changes)
// //   .then(count => {
// //     if(count > 0) {
// //       res.status(200).json({message: `${count} records updated`})
// //     } else {
// //       res.status(404).json({message: 'zoo not found'});
// //     }
// //   }).catch(error => {
// //     res.status(500).json(error);
// //   });
// // });

// // router.delete('/:id', (req, res) => {
// //   // remove zoos (inactivate the zoo)
// //   Zoos.remove(req.params.id)
// // //   .where({id: req.params.id})
// // //   .del()
// //   .then(count => {
// //     if(count > 0) {
// //       const unit = count > 1 ? 'records' : 'record';
// //       res.status(200).json({message: `${count} ${unit} deleted`})
// //     } else {
// //       res.status(404).json({message: 'zoo not found'});
// //     }
// //   }).catch(error => {
// //     res.status(500).json(error);
// //   });
// // });

// module.exports = router;
