
import mongoose, { Schema, Document } from 'mongoose';

/**
 * FEATURE COLLECTION SCHEMA
 * Defines individual platform components and their current readiness status.
 */
export interface IFeature extends Document {
  title: string;
  description: string;
  status: string;
}

const FeatureSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { 
    type: String, 
    required: true,
    enum: ['Launching soon', 'Beta queue', 'Sandbox ready', 'Socket enabled', 'In Testing']
  }
});

/**
 * BUILD STATUS SCHEMA
 * Tracks the overall development percentage and state of the Gaming Café OS.
 */
export interface IBuildStatus extends Document {
  progress: number;
  buildState: string;
  updatedAt: Date;
}

const BuildStatusSchema: Schema = new Schema({
  progress: { type: Number, required: true, min: 0, max: 100 },
  buildState: { type: String, required: true, default: 'Under Development' },
  updatedAt: { type: Date, default: Date.now }
});

/**
 * EARLY ACCESS USERS SCHEMA
 * Stores collected emails from the landing page form.
 */
export interface IEarlyAccessUser extends Document {
  email: string;
  createdAt: Date;
}

const EarlyAccessUserSchema: Schema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  createdAt: { type: Date, default: Date.now }
});

export const Feature = mongoose.model<IFeature>('Feature', FeatureSchema);
export const BuildStatus = mongoose.model<IBuildStatus>('BuildStatus', BuildStatusSchema);
export const EarlyAccessUser = mongoose.model<IEarlyAccessUser>('EarlyAccessUser', EarlyAccessUserSchema);
