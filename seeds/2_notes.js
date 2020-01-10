
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {  user_id: 1, title: 'note 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', created: '2018-11-29', last_modified: '2019-11-29', color: 'yellow'},
        {  user_id: 3, title: 'note 2', content: 'Lorem ipsum dolor sit amet, ut dico decore vis, his cibo augue accusam an. Purto illum ei eum.', created: '2017-10-28', last_modified: '2019-11-29', color: 'orange' },
        {  user_id: 2, title: 'note 3', content: ' Aliquando honestatis eloquentiam ea est. Ne magna assueverit pro.', created: '2016-9-29', last_modified: '2019-11-27', color: 'blue' },
        {  user_id: 1, title: 'note 4', content: 'Eu vidit utroque his, per case vidisse saperet an, in aeterno gubergren his', created: '2019-8-29', last_modified: '2019-11-26', color: 'yellow' },
        {  user_id: 3, title: 'note 5', content: 'At nam veniam quidam, probo persequeris per ad, dicat feugait vel eu.', created: '2012-7-29', last_modified: '2019-11-25', color: 'yellow' },
        {  user_id: 2, title: 'note 6', content: 'Eu mel impetus graecis recteque, et est summo detracto philosophia.', created: '2013-6-29', last_modified: '2019-11-24', color: 'blue' },
        {  user_id: 3, title: 'note 7', content: 'Pri ea omnesque appareat, ea amet unum dicit pri.', created: '2014-11-24', last_modified: '2019-5-29', color: 'yellow' },
        {  user_id: 1, title: 'note 8', content: 'No possim maiorum deseruisse has, cu vim simul saperet theophrastus.', created: '2015-4-23', last_modified: '2019-11-29', color: 'yellow' },
        {  user_id: 1, title: 'note 9', content: 'Menandri electram at his, sea quaeque perpetua deseruisse id.', created: '2016-3-22', last_modified: '2019-11-29', color: 'blue' },
        {  user_id: 3, title: 'note 10', content: ' Eu mutat eloquentiam has, velit graeco argumentum ius eu.', created: '2017-2-21', last_modified: '2019-11-29', color: 'yellow' },
        {  user_id: 2, title: 'note 11', content: 'Et nam utamur atomorum laboramus, purto salutatus comprehensam vix eu', created: '2018-1-20', last_modified: '2019-11-29', color: 'orange' },
      ]);
    });
};
