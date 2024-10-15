# Fitness Tracker Application

## Overview

This is a fitness tracker application that allows users to log their workouts, set fitness goals, and track their progress. Admin users have the ability to manage users, create fitness programs, and view aggregate statistics.

## Features

- User authentication with JWT
- Role-based access (Admin and User)
- Workout logging and management
- Goal setting and tracking
- Aggregate statistics for admins
- Creation and management of fitness programs

## Live URL

**[Live URL Placeholder](http://your-live-url.com)**

> Replace this placeholder with the actual URL where your application is deployed.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- Postman for API testing

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Atlas or local installation)
- Postman (for API testing)

### Clone the Repository


git clone https://github.com/your-username/fitness-tracker-backend.git
cd fitness-tracker-backend

# Install Dependencies
    npm install

# Create .env File
# Database Configuration
MONGO_URL=mongodb://<username>:<password>@your-mongodb-url:27017/fitness-tracker

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Server Port
PORT=5000

# Start the Server
npm start

# Acknowledgements
Node.js
Express.js
MongoDB
Postman