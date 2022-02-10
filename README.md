# Blog-PERN-Stack

### 1. Install all dependencies (client & server).
### 2. Create .env file in the server folder:
- PORT=5000
- CLIENT_URL=http://localhost:3000
- DBNAME=
- DBUSER=
- DBPASS=
### 3. Generate a database migration:
#### using npm
- npx sequelize-cli db:migrate
#### using yarn
- yarn sequelize-cli db:migrate
### 4. Optionally, run seeds:
#### using npm
- npx sequelize-cli db:seed:all
#### using yarn
- yarn sequelize-cli db:seed:all
### 5. Run server:
#### npm start
### 6. Run client:
#### npm start
