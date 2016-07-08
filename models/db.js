var Knex = require('knex')
var dbConfig = require('../knexfile.js')
var node_env = 'development'
var knex = Knex(dbConfig[node_env])

module.exports = {
  getHaikus: function(num) {
    return knex('haiku')
  },

  postHaiku: function(haiku) {
    return knex('haiku').insert(haiku)
  },

  deleteHaiku: function(id) {
    return knex('haiku').where({ id }).del()
  }
}
