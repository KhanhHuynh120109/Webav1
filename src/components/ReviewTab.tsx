import { useMemo, useState } from 'react';
import { filterByTopic, onlyDifficult } from '../lib/filters';
import type { ProgressMap } from '../lib/storage';
import type { TopicId, VocabularyEntry } from '../types';
import { topics } from '../data/topics';

interface Props {
  wordsDue: VocabularyEntry[];
  progressMap: ProgressMap;
  onRemember: (wordId: string) => void;
  onForget: (wordId: string) => void;
}

export function ReviewTab({ wordsDue, progressMap, onRemember, onForget }: Props) {
  const [topic, setTopic] = useState<TopicId | 'all'>('all');
  const [onlyHard, setOnlyHard] = useState(false);
  const [randomMode, setRandomMode] = useState(true);
  const [index, setIndex] = useState(0);

  const filteredWords = useMemo(() => {
    const byTopic = filterByTopic(wordsDue, topic);
    const hard = onlyHard ? onlyDifficult(byTopic, progressMap) : byTopic;
    return randomMode ? [...hard].sort(() => Math.random() - 0.5) : hard;
  }, [wordsDue, topic, onlyHard, randomMode, progressMap]);

  const current = filteredWords[index] ?? filteredWords[0];

  if (!current) {
    return <p className="rounded-2xl bg-white p-4 text-sm dark:bg-slate-800">Tuyệt vời! Bạn không có từ cần ôn ngay lúc này.</p>;
  }

  const q1 = {
    question: `Chọn collocation đúng với từ "${current.word}"`,
    options: [
      current.collocations[0]?.chunk,
      'make a breakfast',
      'deadline delicious',
      'support airport',
    ].filter(Boolean) as string[],
    answer: current.collocations[0]?.chunk,
    explanation: `Chunk chuẩn là "${current.collocations[0]?.chunk}" vì dùng tự nhiên trong ngữ cảnh thực tế.`,
  };

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold">Ôn tập hôm nay</h2>
      <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white p-3 dark:bg-slate-800">
        <select value={topic} onChange={(e) => setTopic(e.target.value as TopicId | 'all')} className="rounded-xl border px-2 py-2 text-sm dark:bg-slate-900">
          <option value="all">Tất cả chủ đề</option>
          {topics.map((t) => <option value={t.id} key={t.id}>{t.name}</option>)}
        </select>
        <button onClick={() => setOnlyHard((s) => !s)} className={`rounded-xl px-2 py-2 text-sm ${onlyHard ? 'bg-amber-200' : 'bg-slate-100 dark:bg-slate-700'}`}>
          Only difficult words
        </button>
        <button onClick={() => setRandomMode((s) => !s)} className={`col-span-2 rounded-xl px-2 py-2 text-sm ${randomMode ? 'bg-emerald-200' : 'bg-slate-100 dark:bg-slate-700'}`}>
          Chế độ random
        </button>
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
        <p className="text-sm text-slate-500">Flashcard #{index + 1}</p>
        <h3 className="text-2xl font-bold">{current.word}</h3>
        <p className="text-sm">{current.meaning_vi}</p>
        <p className="mt-2 text-xs text-slate-500">Chunk nổi bật: {current.collocations[0]?.chunk}</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className="rounded-xl bg-rose-100 py-2 text-sm font-semibold text-rose-700" onClick={() => { onForget(current.id); setIndex((i) => i + 1); }}>Chưa nhớ</button>
          <button className="rounded-xl bg-emerald-100 py-2 text-sm font-semibold text-emerald-700" onClick={() => { onRemember(current.id); setIndex((i) => i + 1); }}>Đã nhớ</button>
        </div>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="font-semibold">Mini Quiz</h3>
        <p className="mt-1">{q1.question}</p>
        <ul className="mt-2 space-y-2">
          {q1.options.map((option) => {
            const correct = option === q1.answer;
            return (
              <li key={option}>
                <button
                  className={`w-full rounded-xl px-3 py-2 text-left ${correct ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 dark:bg-slate-700'}`}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-2 text-xs text-slate-500">Giải thích: {q1.explanation}</p>
      </article>
    </section>
  );
}
