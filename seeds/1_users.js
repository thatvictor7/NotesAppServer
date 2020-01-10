
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'mark32@live.com', username: 'markyMark', password: '123abc', profile_image: 'https://picsum.photos/200' },
        { email: 'marturo25@live.com', username: 'arturon25', password: '123abc', profile_image: 'https://picsum.photos/200' },
        { email: 'rufus7@live.com', username: 'itsRufus', password: '123abc', profile_image: 'https://picsum.photos/200' },
      ]);
    });
};
