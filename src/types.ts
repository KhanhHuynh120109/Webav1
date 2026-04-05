export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2';

export type LearningStatus = 'new' | 'learning' | 'familiar' | 'review' | 'mastered';

export type TopicId =
  | 'daily-life'
  | 'family-relationships'
  | 'school-education'
  | 'work-career'
  | 'travel-transport'
  | 'food-drink'
  | 'technology-internet'
  | 'feelings-personality';

export interface Collocation {
  chunk: string;
  meaning_vi: string;
  examples: string[];
}

export interface ExampleItem {
  en: string;
  vi: string;
  context: string;
}

export interface VocabularyEntry {
  id: string;
  word: string;
  pos: string;
  meaning_vi: string;
  ipa?: string;
  level?: CEFRLevel;
  topic: TopicId;
  contexts: string[];
  collocations: Collocation[];
  examples: ExampleItem[];
  notes: string[];
  common_mistakes: string[];
  synonyms: string[];
  antonyms: string[];
  frequency_order: number;
}

export interface Lesson {
  id: string;
  topic: TopicId;
  title: string;
  description: string;
  vocabularyIds: string[];
  situation: string;
  miniPracticePrompt: string;
}

export interface SituationPack {
  id: string;
  title: string;
  description: string;
  vocabularyIds: string[];
}

export interface WordProgress {
  status: LearningStatus;
  intervalDays: number;
  easeFactor: number;
  nextReviewAt: string | null;
  lastReviewedAt: string | null;
  correctCount: number;
  wrongCount: number;
  seenCount: number;
  favorite: boolean;
}

export interface UserSettings {
  dailyGoal: number;
  wordsPerSession: number;
  preferredMode: 'topic' | 'chunk' | 'review';
  theme: 'light' | 'dark' | 'system';
}
