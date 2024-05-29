# WELCOME TO FLIGHTS AND SEARCH SERVICE

## PROJECT SETUP
- clone the project on your machine.
- For getting all the dependency execute `npm install` on the same path as of your root directory of the downloaded project. 
- Create a `.env ` file in the root directory and add the following environment variables :
     -> `PORT : 3000`
-Inside the `src/config` folder create a new file named `config.json` and then add following json code:

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you've added the db config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`.