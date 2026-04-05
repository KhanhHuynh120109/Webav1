import type { LearningStatus, WordProgress } from '../types';

const DAY = 24 * 60 * 60 * 1000;

export function createInitialWordProgress(): WordProgress {
  return {
    status: 'new',
    intervalDays: 0,
    easeFactor: 2.5,
    nextReviewAt: null,
    lastReviewedAt: null,
    correctCount: 0,
    wrongCount: 0,
    seenCount: 0,
    favorite: false,
  };
}

export function gradeWord(progress: WordProgress, isCorrect: boolean, now = new Date()): WordProgress {
  const next = { ...progress };
  next.seenCount += 1;
  next.lastReviewedAt = now.toISOString();

  if (isCorrect) {
    next.correctCount += 1;
    next.easeFactor = Math.min(3.2, next.easeFactor + 0.05);
    if (next.intervalDays <= 0) next.intervalDays = 1;
    else next.intervalDays = Math.max(1, Math.round(next.intervalDays * next.easeFactor));
  } else {
    next.wrongCount += 1;
    next.easeFactor = Math.max(1.6, next.easeFactor - 0.2);
    next.intervalDays = 1;
  }

  const nextDate = new Date(now.getTime() + next.intervalDays * DAY);
  next.nextReviewAt = nextDate.toISOString();
  next.status = deriveStatus(next);

  return next;
}

export function deriveStatus(progress: WordProgress): LearningStatus {
  if (progress.correctCount >= 8 && progress.wrongCount <= 2) return 'mastered';
  if (progress.correctCount >= 5) return 'familiar';
  if (progress.correctCount >= 2) return 'learning';
  if (progress.wrongCount > progress.correctCount) return 'review';
  return 'new';
}

export function isDueForReview(progress: WordProgress, now = new Date()): boolean {
  if (!progress.nextReviewAt) return true;
  return new Date(progress.nextReviewAt).getTime() <= now.getTime();
}
