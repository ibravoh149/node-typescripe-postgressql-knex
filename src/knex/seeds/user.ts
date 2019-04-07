import * as Knex from "knex";

exports.seed = function (knex: Knex) {
    // Deletes ALL existing entries
    return knex("users").del()
        .then(function () {
            // Inserts seed entries
            return knex("users").insert([
                {
                    email: 'ibravoh@gmail.com',
                    first_name: 'Jade',
                    last_name: 'Fox',
                },
                {
                    email: 'Jared@gmail.com',
                    first_name: 'Jared',
                    last_name: 'Padeleki',
                },
                {
                    email: 'samuel@jackson.com',
                    first_name: 'Mr',
                    last_name: 'Glass'
                }
            ]);
        });
};
