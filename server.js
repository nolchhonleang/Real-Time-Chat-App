const express = require('express');
   const http = require('http');
   const socketIo = require('socket.io');
   const sequelize = require('./config/database');
   const cors = require('cors');
   const dotenv = require('dotenv');
   const messageRoutes = require('./routes/messages');
   const Message = require('./models/Message');
   const path = require('path'); // Add this for serving static files

   dotenv.config();

   const app = express();
   const server = http.createServer(app);
   const io = socketIo(server, {
     cors: {
       origin: '*',
       methods: ['GET', 'POST']
     }
   });

   const PORT = process.env.PORT || 3000;

   // Middleware
   app.use(cors());
   app.use(express.json());

   // Serve the frontend
   app.use(express.static(path.join(__dirname, 'client'))); // Serve client directory
   app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'client', 'index.html')); // Serve index.html at root
   });

   // SQLite Connection
   sequelize.sync()
     .then(() => console.log('SQLite connected'))
     .catch(err => console.error('SQLite connection error:', err));

   // Routes
   app.use('/api/messages', messageRoutes);

   // Socket.IO
   io.on('connection', (socket) => {
     console.log('New client connected:', socket.id);

     socket.on('sendMessage', async (data) => {
       try {
         const message = await Message.create({
           username: data.username,
           content: data.content
         });
         io.emit('message', message); // Broadcast to all clients
       } catch (err) {
         console.error('Error saving message:', err);
       }
     });

     socket.on('disconnect', () => {
       console.log('Client disconnected:', socket.id);
     });
   });

   // Error Handling Middleware
   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).json({ message: 'Something went wrong!' });
   });

   // Start Server
   server.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });

   module.exports = { app, server, io };