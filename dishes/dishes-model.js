// const knex = require('knex');

// const knexConfig = {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/recipes.db3'
//     },
//     useNullAsDefault: true,// required only for sqlite3
//     debug: true
//   }
  
//   const db = knex('./knexfile.js');

// module.exports = {
//     find,
//     findById,
//     add,
//     // update,
//     // remove
// }

// function find() {
//     return db('dishes');
// }

// function findById(id) {
//     return db('dishes').where({ id })
//     .first()
// }

// function add(zoo){
//     return db('dishes').insert(zoo)
// }

// // function update(id, changes){
// //     return db('dishes')
// //     .where({ id })
// //     .update(changes, '*');
// // }

// // function remove(id) {
// //     return db('dishes')
// //     .where({ id })
// //     .del();
// // }