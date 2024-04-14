# Node App Setup Guide

This guide will help you set up and run the Node.js application along with PHPMyAdmin using Docker.

## Prerequisites

- Git
- Docker
- Node.js

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vitabletech/node-express-api-bootstrap.git
```

2. Navigate to the project directory:

```bash
cd node-express-api-bootstrap
```

3. Rename `.env_sample` to .env andEdit the `.env` file to configure your environment variables. You may also need to adjust the `docker-compose.yml` file if you wish to use non-default settings.

## Running the Application

1. Start the Docker containers:

```bash
docker-compose up -d
```

2. Open your web browser and go to [http://localhost:8080](http://localhost:8080) to access PHPMyAdmin.

3. Create a new database named `testdb` as specified in the `.env` file. If you made any changes to the database name, ensure to create it with the updated name.

4. Access the container shell:

```bash
docker exec -it vitabletech-node-app /bin/bash
```

5. Inside the container, run the following command to synchronize the database:

```bash
npm run sync-db && npm run seed
```

This command will automatically create the required tables.

6. Once the database synchronization is complete, you can start working on the application.

7. Access the Node.js application at [http://localhost/](http://localhost/).

## Enjoy!

You're all set up and ready to start working with the Node.js application. Happy coding!

## What This Repository Offers

This repository provides a Node.js application for demonstrating JWT authentication and authorization. It includes features such as user registration, user login, and authorization process. The application is built using Express.js, JWT for authentication, Sequelize ORM for database interactions, and MySQL for database storage.

- Bootstrap project for creating APIs using Express.js
- Pre-configured ESLint setup for code quality assurance
- Husky and commitlint integration for enforcing commit message conventions
- Unit test cases setup for ensuring code reliability
- Code coverage setup for measuring code quality
- Demonstrates JWT authentication and authorization
- Includes user registration and login functionality
- Utilizes Sequelize ORM for database interactions
- Supports MySQL for database storage

## [Connect to us](https://topmate.io/vitabletech)
