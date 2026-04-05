import { useEffect, useMemo, useState } from 'react';
import { lessons, situationPacks } from '../data/lessons';
import { topics } from '../data/topics';
import { vocabularyData } from '../data/vocabulary';
import { computeStreak, getStatusCount, getWordsDue } from '../lib/progress';
import { createInitialWordProgress, gradeWord } from '../lib/spacedRepetition';
import { defaultSettings, loadJSON, saveJSON, STORAGE_KEYS, type ProgressMap } from '../lib/storage';
import type { UserSettings, VocabularyEntry } from '../types';

export function useAppState() {
  const [progressMap, setProgressMap] = useState<ProgressMap>(() => loadJSON(STORAGE_KEYS.progress, {}));
  const [settings, setSettings] = useState<UserSettings>(() => loadJSON(STORAGE_KEYS.settings, defaultSettings));
  const [streak, setStreak] = useState<number>(() => loadJSON(STORAGE_KEYS.streak, 0));
  const [lastActiveDate, setLastActiveDate] = useState<string | null>(() => loadJSON(STORAGE_KEYS.lastActiveDate, null));

  useEffect(() => {
    saveJSON(STORAGE_KEYS.progress, progressMap);
  }, [progressMap]);

  useEffect(() => {
    saveJSON(STORAGE_KEYS.settings, settings);
    applyTheme(settings.theme);
  }, [settings]);

  useEffect(() => {
    const today = new Date();
    const nextStreak = computeStreak(lastActiveDate, streak, today);
    const nextDate = today.toISOString();

    if (nextStreak !== streak || lastActiveDate !== nextDate) {
      setStreak(nextStreak);
      setLastActiveDate(nextDate);
      saveJSON(STORAGE_KEYS.streak, nextStreak);
      saveJSON(STORAGE_KEYS.lastActiveDate, nextDate);
    }
  }, []);

  const dueWords = useMemo(() => getWordsDue(vocabularyData, progressMap), [progressMap]);
  const statusCount = useMemo(() => getStatusCount(progressMap), [progressMap]);

  const learnedWords = Object.values(progressMap).filter((p) => p.correctCount > 0).length;
  const learnedChunks = vocabularyData.reduce((acc, w) => {
    const p = progressMap[w.id];
    return acc + (p?.correctCount ? w.collocations.length : 0);
  }, 0);

  const nextLesson = lessons.find((lesson) => lesson.vocabularyIds.some((id) => !progressMap[id] || progressMap[id].status === 'new')) ?? lessons[0];

  const updateWord = (wordId: string, isCorrect: boolean) => {
    setProgressMap((prev) => {
      const current = prev[wordId] ?? createInitialWordProgress();
      return { ...prev, [wordId]: gradeWord(current, isCorrect) };
    });
  };

  const toggleFavorite = (wordId: string) => {
    setProgressMap((prev) => {
      const current = prev[wordId] ?? createInitialWordProgress();
      return { ...prev, [wordId]: { ...current, favorite: !current.favorite } };
    });
  };

  const resetProgress = () => {
    setProgressMap({});
    setStreak(0);
    saveJSON(STORAGE_KEYS.progress, {});
    saveJSON(STORAGE_KEYS.streak, 0);
  };

  return {
    topics,
    lessons,
    situationPacks,
    vocabularyData,
    progressMap,
    dueWords,
    statusCount,
    settings,
    setSettings,
    streak,
    learnedWords,
    learnedChunks,
    nextLesson,
    updateWord,
    toggleFavorite,
    resetProgress,
  };
}

function applyTheme(theme: UserSettings['theme']) {
  const root = document.documentElement;
  if (theme === 'system') {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.toggle('dark', dark);
    return;
  }
  root.classList.toggle('dark', theme === 'dark');
}

export function getWordsByIds(ids: string[]): VocabularyEntry[] {
  const idSet = new Set(ids);
  return vocabularyData.filter((word) => idSet.has(word.id));
}
