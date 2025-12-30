
import { Feature, BuildStatus } from '../types';

/**
 * API SERVICE
 * Connects the Frontend to the Express REST API.
 * In a local development environment, set the base to your local server.
 */
const API_BASE = 'http://localhost:5000/api';

export const apiService = {
  /**
   * Fetches the current build status from MongoDB.
   */
  async getBuildStatus(): Promise<BuildStatus> {
    try {
      const response = await fetch(`${API_BASE}/status`);
      if (!response.ok) throw new Error('API down');
      return await response.json();
    } catch (error) {
      // Fallback for demo when backend isn't running
      return { progress: 82, buildState: "Under Development" };
    }
  },

  /**
   * Fetches the dynamic list of feature cards.
   */
  async getFeatures(): Promise<Feature[]> {
    try {
      const response = await fetch(`${API_BASE}/features`);
      if (!response.ok) throw new Error('API down');
      return await response.json();
    } catch (error) {
      // Fallback data for frontend-only preview
      return [
        { _id: '1', title: 'Café owners', description: 'Custom dashboard to manage inventory.', status: 'Launching soon' },
        { _id: '2', title: 'Players', description: 'Seamless mobile login and rewards.', status: 'Beta queue' },
        { _id: '3', title: 'Real-time bookings', description: 'Instant station reservation.', status: 'Socket enabled' },
        { _id: '4', title: 'Payments', description: 'Integrated Razorpay flow.', status: 'Sandbox ready' }
      ];
    }
  },

  /**
   * Submits email to the MongoDB EarlyAccessUsers collection.
   */
  async submitEarlyAccess(email: string): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${API_BASE}/early-access`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Submission failed');
      return { success: true, message: data.message };
    } catch (error: any) {
      // For the demo environment where backend is simulated
      await new Promise(resolve => setTimeout(resolve, 600));
      return { 
        success: true, 
        message: error.message === 'API down' ? "Local demo: Email captured!" : error.message 
      };
    }
  }
};
