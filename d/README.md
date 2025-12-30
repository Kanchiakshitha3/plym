# PLYM Games - Implementation & Execution Guide

Follow these steps to set up and run the full-stack MERN dashboard.

## 1. Project Structure
```text
PLYM-Games/
├── backend/            # Node.js + Express Backend
│   ├── server.ts       # Entry point & REST Endpoints
│   └── models.ts       # MongoDB Schemas (Mongoose)
├── components/         # React Components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── BuildStatusCard.tsx
│   ├── FeatureGrid.tsx
│   ├── Roadmap.tsx
│   └── EarlyAccessForm.tsx
├── services/
│   └── api.ts          # API Communication Logic
├── App.tsx             # Main React Application Logic
├── index.tsx           # React Entry Point
├── index.html          # HTML Shell (Tailwind CDN)
└── types.ts            # TypeScript Interfaces
```

## 2. Backend Setup
1. **Navigate to backend:** `cd backend`
2. **Install dependencies:** `npm install express mongoose cors dotenv`
3. **Configure Environment:** Create a `.env` file in the `backend/` folder:
   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=5000
   ```
4. **Run Server:** `npx ts-node server.ts` (Server will start on http://localhost:5000)

## 3. Frontend Setup
1. **Root Directory:** The frontend files are in the root.
2. **Install dependencies:** `npm install react react-dom lucide-react`
3. **Start Frontend:** Use your preferred bundler (e.g., Vite or the provided environment).
4. **API Proxy:** Ensure the frontend points to `http://localhost:5000` for REST calls.

## 4. Sample API Responses

### GET /api/status
```json
{
  "progress": 82,
  "buildState": "Under Development"
}
```

### GET /api/features
```json
[
  {
    "title": "Café owners",
    "description": "Custom dashboard to manage inventory...",
    "status": "Launching soon"
  }
]
```

### POST /api/early-access
Request: `{"email": "test@example.com"}`
Response: `{"success": true, "message": "Successfully added to early access list"}`
