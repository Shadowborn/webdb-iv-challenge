
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate() // Change .del() to .truncate() so we reset the primary key back to 1 in addition to deleting the data
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dishes_id: 1, name: 'Spaghetti'}, //delete id's and change column to name
        {dishes_id: 2, name: 'Steak'},
        {dishes_id: 3, name: 'Tacos'}
      ]);
    });
};
