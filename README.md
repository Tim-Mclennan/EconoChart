# EconoChart

EconoChart is a full-stack web application that provides a visual representation of key performance indicators (KPIs), products, and transactions data. It's a great tool for visualizing and predicting business performance.

I will guide you on how to run EconoChart locally, however you can also view the project from this URL: https://econo-chart-foldazm50-tim-mclennans-projects.vercel.app/

## What I Learned

- Building a full-stack application using React, TypeScript, and Node.js.
- Using Redux Toolkit for state management.
- Fetching data from a MongoDB database using Mongoose.
- Creating a RESTful API with Express.js.
- Deploying the server on Fly.io.
- Using Vite for a faster and leaner development experience.
- Implementing responsive design with Material-UI and CSS Grid.

## Technologies Used

- Frontend: React, TypeScript, Redux Toolkit, Material-UI, Vite.
- Backend: Node.js, Express.js, Mongoose.
- Database: MongoDB.
- Deployment: Fly.io.

## How to run EconoChart

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:

   git clone https://github.com/your-username/econochart.git

2. Install NPM packages for both the client and server:

     cd client && npm install
   cd ../server && npm install

### Running the Application

### Server

Navigate to the server directory and run the following command to start the server:

npm run dev

The server runs on port 3000 by default, but this can be configured by setting the PORT environment variable in a .env file.
Client

### Client

Navigate to the client directory and run the same command to start the client:

npm run dev

The client runs on port 5000 by default, but this can be configured by setting the PORT environment variable in a .env file.

## Project Structure

The project is divided into two main directories: `client` and `server`.

The `client` directory contains all the frontend code written in React and TypeScript. The `src` directory inside `client` contains the main application code, including components, scenes, and state management.

The `server` directory contains all the backend code written in Node.js and Express.js. It includes routes, models, and data.

## Project Link:

 [https://github.com/Tim-Mclennan/EconoChart](https://github.com/your-username/econochart)

## Acknowledgements

- Material-UI
- Vite
- Redux Toolkit
- Express.js
- Mongoose
- Fly.io