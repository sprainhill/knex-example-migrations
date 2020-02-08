
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate() // resets ids
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'rory', website: 'rorymurray.io'},
        {id: 2, username: 'abbey', website: 'google.com'},
        {id: 3, username: 'amy'}
      ]);
    });
};
