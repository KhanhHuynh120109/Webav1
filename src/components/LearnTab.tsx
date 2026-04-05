import { useMemo, useState } from 'react';
import { lessons, situationPacks } from '../data/lessons';
import { getWordsByIds } from '../hooks/useAppState';
import type { ProgressMap, } from '../lib/storage';
import { WordCard } from './WordCard';

interface Props {
  progressMap: ProgressMap;
  onRemember: (wordId: string) => void;
  onForget: (wordId: string) => void;
  onToggleFavorite: (wordId: string) => void;
}

export function LearnTab({ progressMap, onRemember, onForget, onToggleFavorite }: Props) {
  const [selectedLessonId, setSelectedLessonId] = useState(lessons[0].id);
  const [mode, setMode] = useState<'word-to-meaning' | 'meaning-to-word' | 'context-to-chunk'>('word-to-meaning');

  const currentLesson = lessons.find((l) => l.id === selectedLessonId) ?? lessons[0];
  const words = useMemo(() => getWordsByIds(currentLesson.vocabularyIds), [currentLesson.vocabularyIds]);

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold">Học theo bài</h2>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => setSelectedLessonId(lesson.id)}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs ${lesson.id === currentLesson.id ? 'bg-primary-500 text-white' : 'bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-200'}`}
          >
            {lesson.title}
          </button>
        ))}
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-800">
        <p className="font-semibold">Tình huống: {currentLesson.situation}</p>
        <p className="text-slate-500">{currentLesson.miniPracticePrompt}</p>
      </article>

      <div className="grid grid-cols-3 gap-2">
        {[
          ['word-to-meaning', 'Xem từ → đoán nghĩa'],
          ['meaning-to-word', 'Xem nghĩa → đoán từ'],
          ['context-to-chunk', 'Xem tình huống → chọn cụm'],
        ].map(([value, label]) => (
          <button
            key={value}
            className={`rounded-xl px-2 py-2 text-[11px] ${mode === value ? 'bg-slate-900 text-white dark:bg-primary-500' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}
            onClick={() => setMode(value as typeof mode)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {words.map((word) => (
          <WordCard
            key={word.id}
            word={{
              ...word,
              ...(mode === 'meaning-to-word' ? { word: `(${word.meaning_vi})` } : {}),
              ...(mode === 'context-to-chunk' ? { meaning_vi: `Ngữ cảnh: ${word.contexts[0]}` } : {}),
            }}
            progress={progressMap[word.id]}
            onRemember={() => onRemember(word.id)}
            onForget={() => onForget(word.id)}
            onToggleFavorite={() => onToggleFavorite(word.id)}
          />
        ))}
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-sm font-semibold">Học theo ngữ cảnh nhanh</h3>
        <ul className="mt-2 grid grid-cols-2 gap-2 text-xs">
          {situationPacks.map((s) => (
            <li key={s.id} className="rounded-xl bg-slate-100 p-2 dark:bg-slate-700">{s.title}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
