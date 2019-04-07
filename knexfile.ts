// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://fytzruek:zOLiklQDmsXMD_gAn-NNtecTjXgxNPFs@isilo.db.elephantsql.com:5432/fytzruek',
    migrations: { 
      directory: __dirname + '/src/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/src/knex/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME,
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME,
      charset: 'utf8'
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
