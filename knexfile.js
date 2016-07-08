var env = require('dotenv')
env.load()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      database: process.env.DBNAME,
      user:     process.env.USERNAME,
      password: process.env.PASSWORD,
      ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
