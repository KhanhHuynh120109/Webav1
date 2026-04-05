import { useMemo, useState } from 'react';
import { Bookmark, BookmarkCheck, RotateCcw } from 'lucide-react';
import type { VocabularyEntry, WordProgress } from '../types';

interface Props {
  word: VocabularyEntry;
  progress?: WordProgress;
  onRemember: () => void;
  onForget: () => void;
  onToggleFavorite: () => void;
}

export function WordCard({ word, progress, onRemember, onForget, onToggleFavorite }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [chunkFocus, setChunkFocus] = useState(0);

  const currentChunk = useMemo(() => word.collocations[chunkFocus], [chunkFocus, word.collocations]);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{showAnswer ? word.word : '???'}</p>
          <p className="text-xs text-slate-500 dark:text-slate-300">{word.pos} • {word.level} • {word.ipa ?? 'N/A'}</p>
        </div>
        <button className="rounded-full p-2" onClick={onToggleFavorite} type="button" aria-label="bookmark">
          {progress?.favorite ? <BookmarkCheck className="h-5 w-5 text-amber-500" /> : <Bookmark className="h-5 w-5 text-slate-400" />}
        </button>
      </div>

      <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-100">Nghĩa: {showAnswer ? word.meaning_vi : 'Hãy đoán nghĩa trước khi lật thẻ.'}</p>

      <section className="mb-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-900/60">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Learn in chunks, not isolated words</p>
        <div className="mb-2 flex flex-wrap gap-2">
          {word.collocations.map((chunk, idx) => (
            <button
              key={chunk.chunk}
              type="button"
              onClick={() => setChunkFocus(idx)}
              className={`rounded-full px-3 py-1 text-xs ${idx === chunkFocus ? 'bg-primary-500 text-white' : 'bg-white text-slate-600 dark:bg-slate-700 dark:text-slate-200'}`}
            >
              {chunk.chunk}
            </button>
          ))}
        </div>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-100">{currentChunk.meaning_vi}</p>
        <p className="text-xs text-slate-500 dark:text-slate-300">Ví dụ: {currentChunk.examples[0]}</p>
      </section>

      <section className="mb-3">
        <p className="text-xs font-semibold text-slate-500">Ví dụ theo ngữ cảnh</p>
        <ul className="mt-1 space-y-1 text-sm text-slate-700 dark:text-slate-200">
          {word.examples.slice(0, showAnswer ? 3 : 1).map((ex) => (
            <li key={ex.en}>• {showAnswer ? `${ex.en} — ${ex.vi}` : ex.en}</li>
          ))}
        </ul>
      </section>

      <div className="mb-3 flex gap-2">
        <button
          type="button"
          onClick={() => setShowAnswer((s) => !s)}
          className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-600 dark:text-slate-100"
        >
          <RotateCcw className="mr-1 inline h-4 w-4" />
          {showAnswer ? 'Ẩn đáp án' : 'Flip / Show answer'}
        </button>
      </div>

      <div className="sticky bottom-20 grid grid-cols-2 gap-2">
        <button type="button" onClick={onForget} className="rounded-xl bg-rose-100 px-3 py-2 text-sm font-bold text-rose-700 dark:bg-rose-900/40 dark:text-rose-200">
          Chưa nhớ
        </button>
        <button type="button" onClick={onRemember} className="rounded-xl bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
          Đã nhớ
        </button>
      </div>
    </article>
  );
}
