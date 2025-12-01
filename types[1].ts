
import type React from 'react';

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}