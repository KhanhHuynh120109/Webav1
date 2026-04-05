import type { TopicId } from '../types';

export interface TopicMeta {
  id: TopicId;
  name: string;
  description: string;
  color: string;
}

export const topics: TopicMeta[] = [
  { id: 'daily-life', name: 'Daily life', description: 'Sinh hoạt thường ngày', color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/60 dark:text-sky-200' },
  { id: 'family-relationships', name: 'Family & relationships', description: 'Gia đình & mối quan hệ', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-200' },
  { id: 'school-education', name: 'School & education', description: 'Trường học & giáo dục', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-200' },
  { id: 'work-career', name: 'Work & career', description: 'Công việc & sự nghiệp', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-200' },
  { id: 'travel-transport', name: 'Travel & transport', description: 'Du lịch & di chuyển', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/60 dark:text-teal-200' },
  { id: 'food-drink', name: 'Food & drink', description: 'Ẩm thực & đồ uống', color: 'bg-lime-100 text-lime-700 dark:bg-lime-900/60 dark:text-lime-200' },
  { id: 'technology-internet', name: 'Technology & internet', description: 'Công nghệ & internet', color: 'bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-200' },
  { id: 'feelings-personality', name: 'Feelings & personality', description: 'Cảm xúc & tính cách', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/60 dark:text-pink-200' },
];

export const situationLabels = [
  'At a coffee shop',
  'At school',
  'At work',
  'At the airport',
  'Talking about family',
  'Making plans',
  'Describing feelings',
  'Using technology',
] as const;
