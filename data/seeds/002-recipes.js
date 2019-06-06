
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate() // Change .del() to .truncate() so we reset the primary key back to 1 in addition to deleting the data
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Spaghetti'}, //delete id's and change column to name
        {name: 'TA'},
        {name: 'PM'}
      ]);
    });
};
