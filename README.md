
# Chat App 🚀

**Real-Time Chat Application** built with Node.js, Express, Socket.IO, and SQLite.

![Chat App Screenshot](https://github.com/user-attachments/assets/6c19826e-8732-45e6-a708-2680056468f6)

## ✨ Features

- ⚡ Real-time messaging powered by **WebSockets (Socket.IO)**
- 💾 Persistent message storage using **SQLite**
- ✅ Server-side input validation
- 📡 RESTful API for message history
- 🏗️ Clean and scalable project architecture
- 🔄 Hot reload in development

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/your-username/chat-app.git
cd chat-app

# 2. Install dependencies
npm install

# 3. Start the server
npm start

# For development (with auto-restart
npm run dev
```

The server will run on `http://localhost:3000`

## 📡 API Endpoints

| Method | Endpoint          | Description                     | Body (JSON)                  |
|-------|-------------------|----------------------------------|-------------------------------|
| GET   | `/api/messages`   | Get last 50 messages            | -                             |
| POST  | `/api/messages`   | Send a message via HTTP         | `{ "username": "string", "content": "string" }` |

## 🔌 WebSocket Events (Socket.IO)

- **Emit**: `sendMessage` → `{ username: string, content: string }`
- **Listen**: `message` → receives `{ id, username, content, timestamp }`

## 📂 Project Structure

```
chat-app/
├── config/          # Database configuration
│   └── database.js
├── models/          # Sequelize model
│   └── Message.js
├── routes/          # Express routes
│   └── messages.js
├── client/          # Static frontend (HTML + Socket.IO client)
│   └── index.html
├── .env             # Environment variables
├── .gitignore
├── package.json
├── server.js        # Main server entry point
└── README.md
```

## 🧪 Testing

```bash
npm test
```

## 🌐 Frontend Integration

The app includes a simple client in `/client/index.html`.

To run it locally:

```bash
npx http-server client -p 8080
```

Then open `http://localhost:8080` — it will connect automatically to `ws://localhost:3000`

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

Made with ❤️ and a lot of coffee.
```

### Why this is better:
- Professional look with emojis and clear sections
- Proper Markdown tables and code blocks
- Highlighted commands
- Better visual hierarchy
- Mobile-friendly
- Encourages contributions
- Image placed at the top for instant visual appeal

Just replace your current `README.md` with this — it will look **way** more polished on GitHub! 🚀
