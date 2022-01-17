# Customers CRUD Project Build with TypeORM

## Steps to run this project:
### Install Dependencies
Run `npm install` command

### Setting up Database (Linux)
Run `sudo -u postgres psql` to enter in postgres terminal

Run `CREATE DATABASE <database_name_here>;` to create a new 

Run `ALTER USER postgres PASSWORD '<new_pwd_here>';` in need to reset database password

Run `exit` or `CTRL + d` to exit postgres terminal

Setup database settings inside `ormconfig.json` file

### Running the project
Run `npm run dev` command to start app with nodemon

## Built With
* [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript
* [Node.js](https://nodejs.org/en/docs/) - JavaScript runtime
* [Express](https://expressjs.com/) - Node.js web application framework
* [TypeORM](https://typeorm.io/#/) - TypeScript Object–relational Mapping
* [PostgreSQL](https://www.postgresql.org/docs/) - PostgreSQL database