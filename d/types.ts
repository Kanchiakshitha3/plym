
export interface Feature {
  _id: string;
  title: string;
  description: string;
  status: 'Launching soon' | 'Beta queue' | 'Sandbox ready' | 'Socket enabled' | 'In Testing';
  icon?: string;
}

export interface BuildStatus {
  progress: number;
  buildState: string;
}

export interface RoadmapItem {
  id: number;
  phase: 'Now' | 'Next';
  title: string;
  items: string[];
}
