# node.js-habit-tracker

## Overview
This project is designed to run locally and is set up to handle secrets securely using environment variables. Follow the instructions below to set up and run the project on your local machine.

---

## Prerequisites
Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) 
- [MongoDB](https://www.mongodb.com/) (if using a local database instance)
- A text editor like [VS Code](https://code.visualstudio.com/)

---

## Setup Instructions

### 1. Clone the Repository
1. Clone the repository to your local machine:

2. Install Dependencies
Install the required dependencies for the project:

3. Set Up Environment Variables
Create a .env file in the root of the project directory.

Add the following environment variables to the .env file:

Example .env file:

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mydb

PORT=3000

Replace the values with your actual credentials or values.



4. Start the Application


To run the application locally, you need to start both the backend and the frontend. Follow these steps:

### Step 1: Start the Backend

Navigate to the backend directory:
 ```bash
 cd a7-sharkayl-backend
```

Install backend dependencies:

 ```bash
npm install
```
Start the backend server:

 ```bash
npm start
```

The backend server will run at http://localhost:3000 

### Step 2: Start the Frontend
Open a new terminal and navigate to the frontend directory:

```bash
cd movies-frontend-starter-1123
```

Install frontend dependencies:

```bash
npm install
```

Start the frontend application:

```bash
npm start
```






