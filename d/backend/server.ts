
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Feature, BuildStatus, EarlyAccessUser } from './models';

/**
 * PLYM Games Backend - Node/Express Implementation
 * Responsible for serving dashboard data and collecting user emails.
 */

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for cross-origin requests and JSON parsing
app.use(cors());
app.use(express.json());

// MongoDB Connection Logic
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/plym_games';
mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('✅ MongoDB Connected Successfully');
    // Seed initial data if database is empty
    const count = await Feature.countDocuments();
    if (count === 0) {
      await seedDatabase();
    }
  })
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

/**
 * SEEDING FUNCTION
 * Populates initial data for the technical assessment demonstration.
 */
async function seedDatabase() {
  await BuildStatus.create({ progress: 82, buildState: 'Under Development' });
  await Feature.insertMany([
    { title: 'Café owners', description: 'Custom dashboard to manage inventory and rates.', status: 'Launching soon' },
    { title: 'Players', description: 'Seamless mobile login and ranking system.', status: 'Beta queue' },
    { title: 'Real-time bookings', description: 'Instant station reservation via WebSocket.', status: 'Socket enabled' },
    { title: 'Payments', description: 'Integrated Razorpay flow for quick recharges.', status: 'Sandbox ready' }
  ]);
  console.log('🌱 Database Seeded with sample features');
}

// --- API ENDPOINTS ---

/**
 * GET /api/status
 * Returns current build progress percentage and the string state.
 */
app.get('/api/status', async (req: Request, res: Response) => {
  try {
    const status = await BuildStatus.findOne().sort({ updatedAt: -1 });
    res.json(status || { progress: 82, buildState: 'Under Development' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch status' });
  }
});

/**
 * GET /api/features
 * Returns the list of all planned feature cards and their statuses.
 */
app.get('/api/features', async (req: Request, res: Response) => {
  try {
    const features = await Feature.find();
    res.json(features);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch features' });
  }
});

/**
 * POST /api/early-access
 * Validates and saves user email for the early access queue.
 */
app.post('/api/early-access', async (req: Request, res: Response) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'Email address is required' });
  }

  try {
    const existing = await EarlyAccessUser.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'This email is already on the waitlist' });
    }

    const newUser = new EarlyAccessUser({ email });
    await newUser.save();

    res.status(201).json({ 
      success: true, 
      message: 'Added to waitlist! We will notify you at ' + email 
    });
  } catch (error) {
    res.status(500).json({ message: 'Database error while saving user' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 PLYM Games API running at http://localhost:${PORT}`);
});
