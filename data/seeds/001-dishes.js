
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate() // Change .del() to .truncate() so we reset the primary key back to 1 in addition to deleting the data
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Steak and Something'}, //delete id's and change column to name
        {name: 'TA'},
        {name: 'PM'}
      ]);
    });
};
