import type { TopicId, VocabularyEntry } from '../types';
import type { ProgressMap } from './storage';

export function filterByQuery(words: VocabularyEntry[], query: string): VocabularyEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return words;

  return words.filter((w) =>
    [
      w.word,
      w.meaning_vi,
      w.topic,
      ...w.contexts,
      ...w.collocations.map((c) => c.chunk),
      ...w.synonyms,
      ...w.antonyms,
    ].join(' ').toLowerCase().includes(q),
  );
}

export function filterByTopic(words: VocabularyEntry[], topic: TopicId | 'all'): VocabularyEntry[] {
  return topic === 'all' ? words : words.filter((w) => w.topic === topic);
}

export function onlyDifficult(words: VocabularyEntry[], progressMap: ProgressMap): VocabularyEntry[] {
  return words.filter((w) => {
    const p = progressMap[w.id];
    if (!p) return true;
    return p.status === 'review' || p.wrongCount > p.correctCount;
  });
}
