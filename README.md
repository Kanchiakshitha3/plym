🎮 PLYM Games – Gaming Café OS
Coming Soon / Product Status Dashboard (Full-Stack MERN)
A full-stack product preview / coming-soon dashboard for PLYM Games – Gaming Café OS, built as part of a technical assessment.
This application displays build progress, feature readiness, and collects early-access emails.
🔥 Features
🚀 Live build progress dashboard
📊 Dynamic feature status cards
🧩 Roadmap section (Now / Next)
📧 Early access email collection
🔄 REST API powered data
🎨 Modern UI using Tailwind CSS
☁️ MongoDB Atlas integration
🧱 Tech Stack:
1)Frontend:
React.js
Tailwind CSS
Axios (API communication)
Backend
Node.js
Express.js
MongoDB (MongoDB Atlas)
Mongoose ODM
📁 Project Structure
PLYM-Games-Fullstack/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Feature.js
│   │   ├── BuildStatus.js
│   │   └── EarlyAccessUser.js
│   └── routes/
│       ├── statusRoutes.js
│       ├── featureRoutes.js
│       └── earlyAccessRoutes.js
│
└── frontend/
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── src/
    │   ├── App.js
    │   ├── index.js
    │   ├── api.js
    │   └── components/
    │       ├── Navbar.jsx
    │       ├── Hero.jsx
    │       ├── BuildStatus.jsx
    │       ├── Features.jsx
    │       ├── Roadmap.jsx
    │       └── EarlyAccess.jsx

⚙️ Setup & Installation
1️⃣ Clone or Extract Project
unzip PLYM-Games-Fullstack.zip
cd PLYM-Games-Fullstack

2️⃣ Backend Setup
cd backend
npm install


🔑 Configure MongoDB
Edit backend/config/db.js and add your MongoDB Atlas URI:

mongoose.connect("YOUR_MONGODB_ATLAS_CONNECTION_STRING")


▶️ Run backend server:

node server.js


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000

🔌 API Endpoints
Get Build Status
GET /api/status


Response

{
  "progress": 82,
  "buildState": "Under Development"
}

Get Features
GET /api/features


Response

[
  {
    "title": "Café Owners",
    "description": "Manage café operations",
    "status": "Launching Soon"
  },
  {
    "title": "Players",
    "description": "Player onboarding",
    "status": "Beta Queue"
  },
  {
    "title": "Payments",
    "description": "Razorpay integration",
    "status": "Sandbox Ready"
  }
]

Save Early Access Email
POST /api/early-access


Request Body

{
  "email": "user@gmail.com"
}


✔️ Email is stored in MongoDB
✔️ Success message shown on UI

🗃️ MongoDB Collections

BuildStatus

progress (Number)

buildState (String)

Features

title (String)

description (String)

status (String)

EarlyAccessUsers

email (String)

createdAt (Date)

🚀 Deployment

Frontend → Vercel / Netlify

Backend → Render / Railway / AWS EC2

Database → MongoDB Atlas

🎯 Assessment Notes

This is a product preview dashboard, not a real gaming platform

All UI data is API-driven

Designed to demonstrate full-stack MERN skills

Clean architecture & scalable structure

👩‍💻 Author

Kanchi Akshitha
Full-Stack MERN Developer
