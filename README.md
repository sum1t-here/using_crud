# Using CRUD

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A simple CRUD application built with Node.js, Express, and MongoDB.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a basic CRUD (Create, Read, Update, Delete) application that demonstrates how to perform database operations using Node.js, Express, and MongoDB. It provides a RESTful API for managing users, including creating new users, retrieving user information, updating user data, and deleting users.

## Features

- User creation: Add new users with name and email
- User retrieval: Fetch user information by ID
- User update: Update existing user data
- User deletion: Remove users from the database

## Installation

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/sum1t-here/using_crud.git`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file and add necessary configurations (refer to `.env.example` for required variables)
4. Start the server: `npm start`

Make sure you have Node.js and MongoDB installed on your system before running the application.

## Usage

Once the server is running, you can access the API endpoints to perform CRUD operations on users. The base URL for the API is `http://localhost:3000`.

API Endpoints:

- `GET /users`: Retrieve all users
- `GET /users/:id`: Get user information by ID
- `POST /users`: Create a new user
- `PUT /users/:id`: Update user data
- `DELETE /users/:id`: Delete a user

Refer to the API Reference section below for detailed information on each endpoint.

## API Reference

The API endpoints are documented below:

### Retrieve all users

- Endpoint: `GET /users`
- Response: Array of user objects

### Get user information by ID

- Endpoint: `GET /users/:id`
- Response: User object

### Create a new user

- Endpoint: `POST /users`
- Request Body: JSON object with `name` and `email` properties
- Response: Created user object

### Update user data

- Endpoint: `PUT /users/:id`
- Request Body: JSON object with updated user properties
- Response: Updated user object

### Delete a user

- Endpoint: `DELETE /users/:id`
- Response: Success message

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

