import * as Knex from "knex";

exports.up = function (knex: Knex) {
    return knex.schema.createTable('users', function (table) {
        table.bigIncrements('id');
        table.string('email').unique().notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
};

exports.down = function (knex: Knex){
    return knex.schema.dropTable('users');  
};
