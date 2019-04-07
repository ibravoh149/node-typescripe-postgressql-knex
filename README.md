To start:
1. Clone this Repo into local machine
2. navigate into the project folder by cd into
3. Run the command "npm install". This will install all project dependencies
4. Install the knex cli with "npm install knex -g" if you don't already have knex cli installed on  you machine.
5. Run the command "npm start" to start the application (database has already been seeded with data).

if you prefer to use you own db instance
6. Replace the connection in "knexfile.ts" with your own db instance url
7. Run "npm run migrate" to update your db instance with the migration
8. Run "npm run seed" to seed data into the your db instance
9. Run "npm start"

routes:
1. GET '/api/users/:id'
        - finds a user by id
2. POST '/api/users/:id'
        - updates a user by the id supplied