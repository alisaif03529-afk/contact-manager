# Contact Manager (MERN Stack)
*Live Demo:* https://contact-manager-ekgc.vercel.app

A full-stack contact management application built with MongoDB, Express, React and Node.js. Users can add, view, edit, delete and search contacts, with validation and error handling.

Built as part of the Syntecxhub internship (Project 2).

## Features

- Create, read, update and delete (CRUD) contacts
- Search contacts by name, email or phone
- Backend validation (required fields, email format, 10-digit phone)
- Duplicate email detection
- Global error handling middleware (400, 404, 500)
- Error messages shown on the form
- Delete confirmation prompt

## Tech Stack

- Frontend: React (Vite), Axios, CSS
- Backend: Node.js, Express.js
- Database: MongoDB Atlas, Mongoose

## Project Structure


contact-manager/
├── server/
│   ├── config/db.js
│   ├── controllers/contactController.js
│   ├── middleware/errorHandler.js
│   ├── models/Contact.js
│   ├── routes/contactRoutes.js
│   └── server.js
├── client/
│   └── src/
│       ├── components/
│       ├── services/api.js
│       ├── App.jsx
│       └── App.css
└── README.md


## Getting Started

### Prerequisites

- Node.js (v18 or later)
- A free MongoDB Atlas account

### 1. Clone the repository

```bash
git clone https://github.com/alisaif03529-afk/contact-manager.git
cd contact-manager


### 2. Backend setup

bash
cd server
npm install


Create a .env file inside server/:


PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-host>/contactdb?appName=Cluster0


Start the server:

bash
npm run dev


### 3. Frontend setup

Open a new terminal:

bash
cd client
npm install
npm run dev


Open http://localhost:5173 in your browser.

## API Endpoints

Base URL: http://localhost:5000/api/contacts

| Method | Endpoint | Description                       |
| ------ | -------- | --------------------------------- |
| GET    | /      | Get all contacts (?search=term) |
| POST   | /      | Create a new contact              |
| PUT    | /:id   | Update a contact                  |
| DELETE | /:id   | Delete a contact                  |

## Contact Schema

| Field   | Type   | Rules                         |
| ------- | ------ | ----------------------------- |
| name    | String | Required                      |
| email   | String | Required, unique, valid email |
| phone   | String | Required, exactly 10 digits   |
| address | String | Optional                      |

## Error Handling

- 400: validation errors, duplicate email, invalid ID
- 404: contact not found
- 500: server error

## Screenshots

Add screenshots of the app here.

## Author

Saif Ali
GitHub: https://github.com/alisaif03529-afk