
# Chat App

**Real-Time Chat Application** built with Node.js, Express, and Socket.IO  
Simple, lightweight, and perfect for learning or small projects

![Chat Demo](https://github.com/user-attachments/assets/6c19826e-8732-45e6-a708-2680056468f6)

## ✨ Features

- ⚡ Real-time messaging with **Socket.IO**
- 💾 Persistent messages stored in `messages.json`
- ✅ Basic input validation & sanitization
- 📡 REST API to fetch/send messages
- 🛠 No database required — runs out of the box
- 🔄 Hot reload in development

## 🚀 Quick Start

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app

npm install

# Start server
npm start

# Or with auto-restart (recommended for dev)
npm run dev
```

Server runs at: **http://localhost:3000**

## 📡 API Endpoints

| Method | Endpoint           | Description                  | Body (JSON)                           |
|-------|--------------------|------------------------------|----------------------------------------|
| GET   | `/api/messages`    | Get all messages             | -                                      |
| POST  | `/api/messages`    | Send a message               | `{ "username": "string", "content": "string" }` |

## 🔌 WebSocket Events

- **Client emits**: `sendMessage` → `{ username, content }`
- **Server broadcasts**: `message` → `{ id, username, content, timestamp }`

## 📂 Project Structure

```
chat-app/
├── client/             # Simple HTML + JS frontend
│   └── index.html
├── messages.json       # All messages stored here
├── .env
├── .gitignore
├── package.json
├── server.js           # Main server (Express + Socket.IO)
└── README.md
```

## 🌐 Run the Frontend

The included `client/index.html` is a complete working chat UI.

```bash
npx http-server client -p 8080
```

Then open: http://localhost:8080  
It automatically connects to your backend at `ws://localhost:3000`

## 🧪 Testing (optional)

```bash
npm test
```

## 🤝 Contributing

Feel free to fork and submit pull requests!  
Found a bug or want a new feature? Open an issue.

## 📝 License

[MIT License](LICENSE) – free to use, modify, and share.

---

**Zero setup. Real-time. Pure Node.js.**

Enjoy building!
```

This version is now 100% accurate for a JSON-based chat app  
- Looks professional on GitHub
- Clear, beginner-friendly
- Reflects actual tech stack (no SQLite mention)

Just paste this over your current `README.md` — it will look amazing and correct! 🚀
