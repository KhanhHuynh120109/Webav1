import type { VocabularyEntry } from '../types';
import { isDueForReview } from './spacedRepetition';
import type { ProgressMap } from './storage';

export function getStatusCount(progressMap: ProgressMap) {
  const base = { new: 0, learning: 0, familiar: 0, review: 0, mastered: 0 };
  Object.values(progressMap).forEach((p) => {
    base[p.status] += 1;
  });
  return base;
}

export function computeStreak(lastActiveDate: string | null, streak: number, now = new Date()): number {
  if (!lastActiveDate) return 1;
  const prev = new Date(lastActiveDate);
  const dayDiff = Math.floor((startOfDay(now).getTime() - startOfDay(prev).getTime()) / (1000 * 60 * 60 * 24));
  if (dayDiff <= 0) return streak;
  if (dayDiff === 1) return streak + 1;
  return 1;
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getWordsDue(vocab: VocabularyEntry[], progressMap: ProgressMap): VocabularyEntry[] {
  return vocab.filter((word) => {
    const p = progressMap[word.id];
    return !p || isDueForReview(p);
  });
}
