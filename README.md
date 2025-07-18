# Chat App 
Real-Time Chat App
A real-time chat application built with Node.js, Express, Socket.IO, and SQLite.
Features

Real-time messaging using WebSockets
Persistent message storage with SQLite
Input validation
RESTful API for message history
Scalable architecture

Setup

Clone the repository
Install dependencies: npm install
Start the server: npm start
For development with hot reload: npm run dev

API Endpoints

GET /api/messages - Get recent messages (up to 50)
POST /api/messages - Post a new message

WebSocket Events

sendMessage - Send a new message (expects { username, content })
message - Receive new messages in real-time

Project Structure
chat-app/
├── config/
│   └── database.js
├── models/
│   └── Message.js
├── routes/
│   └── messages.js
├── client/
│   └── index.html
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js

Testing
Run tests with: npm test
Frontend Integration
Serve the client/index.html file using a simple HTTP server (e.g., npx http-server client). Connect to ws://localhost:3000 using Socket.IO client, emit sendMessage events, and listen for message events.