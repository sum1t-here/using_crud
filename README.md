# Using CRUD

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A simple CRUD application built with Node.js, Express, and MongoDB.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
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

Once the server is running, you can access the API endpoints to perform CRUD operations on users. The base URL for the API is `http://localhost:8000`.

API Endpoints:

- `GET /getUser`: Retrieve all users
- `POST /createUser`: Create a new user
- `PUT /editUser`: Update user data
- `DELETE /deleteUser`: Delete a user

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

