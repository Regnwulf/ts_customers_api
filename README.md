# Customers Crud Project Build with TypeORM and TypeScript

Steps to run this project:
### Install Dependencies
Run `npm install` command

### Setting up Database
Run `sudo -u postgres psql` to enter in postgres terminal
Run `CREATE DATABASE <database_name_here>;` to create a new Database
Run `ALTER USER postgres PASSWORD '<new_pwd_here>';` in need to reset database password
Run `exit` or `CTRL + d` to exit postgres terminal
Setup database settings inside `ormconfig.json` file

### Running the project
Run `npm run dev` command to start app with nodemon