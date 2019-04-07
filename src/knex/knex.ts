
// import knex from 'knex';
// import { Config } from 'knex';

const environment = process.env.ENVIRONMENT || 'development'
const config = require('../../knexfile')[environment];
const db= require('knex')(config);
export default db;