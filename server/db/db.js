const pg = require('pg')

const { host, database, password } = require('pg/lib/defaults')

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'badminton',
  password: 'postgres',
  port: '5432',
})

module.exports = client
