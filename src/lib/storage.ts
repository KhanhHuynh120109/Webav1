import type { UserSettings, WordProgress } from '../types';

export const STORAGE_KEYS = {
  progress: 'oxford3000.progress',
  settings: 'oxford3000.settings',
  streak: 'oxford3000.streak',
  lastActiveDate: 'oxford3000.lastActiveDate',
};

export function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveJSON<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export const defaultSettings: UserSettings = {
  dailyGoal: 12,
  wordsPerSession: 8,
  preferredMode: 'chunk',
  theme: 'system',
};

export type ProgressMap = Record<string, WordProgress>;
