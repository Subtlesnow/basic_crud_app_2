
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      const todos = [{
        title: 'Do laundry',
        priority: 1,
        description: 'Wash clothes and dry.',
        complete: false,
        date: new Date()
      }, {
        title: 'Cook dinner',
        priority: 3,
        description: 'Reheat pizza',
        complete: false,
        date: new Date()
      },
      {
        title: 'Watch game',
        priority: 4,
        description: 'Warriors win the Finals',
        complete: false,
        date: new Date()
      }];

      return knex('todo').insert(todos)
    });
};
