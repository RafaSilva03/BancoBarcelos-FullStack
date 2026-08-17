# BancoBarcelos FullStack

A full-stack banking application developed as a group project, simulating the core functionalities of a modern digital banking platform.

The project consists of a web frontend and a REST API backend, providing users with functionality for managing bank accounts, transfers, cards, credits and other banking services.

## Overview

BancoBarcelos was developed as an academic group project with a focus on full-stack web development, REST API design, database management and software architecture.

The application follows a client-server architecture, with the frontend communicating with the backend through REST API endpoints.

## Features

### Authentication
- User authentication and authorization
- Secure password handling
- JWT-based authentication

### Bank Accounts
- Create and manage bank accounts
- Retrieve account information
- Manage account movements

### Transfers
- Perform bank transfers
- Manage recurring transfers
- View transfer information

### Cards
- Create and manage virtual cards
- Support for different card purchase configurations

### Credit
- Credit/loan simulation
- Credit application functionality

### Insurance
- Insurance-related functionalities
- Support for different insurance products

## Architecture

The project is divided into two main components:

```text
BancoBarcelos-FullStack/
├── frontend/
├── backend/
├── documentation/
└── README.md
```
### Frontend

The frontend provides the user interface and communicates with the backend through REST API requests.

### Backend

The backend exposes the REST API responsible for authentication, business logic, data management and communication with the database.

## Technologies

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express
- TypeScript
- Sequelize
- PostgreSQL
- JWT
- Jest
- Supertest

## Documentation

Project documentation is available in the *documentation* directory.

It includes:

- BPMN diagrams
- Class diagrams
- Entity-Relationship diagrams
- Sequence diagrams
- State diagrams
- Use Case diagrams
- Requirements documentation
- Application mockups

## My Contributions

This project was developed collaboratively as part of an academic group project.

The original project was developed in a private GitHub organization. This repository is a clean, public copy created to showcase the project and its documentation.

My contributions included both backend and frontend development, particularly in the implementation and evolution of several banking-related features.

### Backend

- Bank account creation and account type functionality
- Bank account CRUD operations
- Bank account movements
- Recurring transfer functionality
- Transfer functionality and CRUD operations
- Card controllers and services
- Holder functionality
- Period type and balance history services
- Database models and migrations
- Refactoring of controllers and services
- Validation and bug fixes

### Frontend

- Virtual card functionality
- Card interface
- Recurring transfer interface
- Transfer interface
- Integration with backend functionality
- UI fixes and improvements

The contributions listed above are based on my work in the original team repository.

## Getting Started

### Backend

```text
cd backend
npm install
```

Create a .env file based on the required environment variables and configure the database connection.

Then start the development server:

```text
npm run start
```

### Frontend

```text
cd frontend
npm install
npm run dev
``` 
