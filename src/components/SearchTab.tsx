import { useMemo, useState } from 'react';
import { filterByQuery } from '../lib/filters';
import type { VocabularyEntry } from '../types';

export function SearchTab({ words }: { words: VocabularyEntry[] }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => filterByQuery(words, query).slice(0, 30), [words, query]);

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold">Tìm kiếm từ/chunk/chủ đề</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ví dụ: deadline, bữa sáng, at work, meet a deadline..."
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-primary-500 dark:border-slate-700 dark:bg-slate-800"
      />
      <p className="text-xs text-slate-500">{results.length} kết quả</p>
      <div className="space-y-2">
        {results.map((w) => (
          <article key={w.id} className="rounded-xl border border-slate-200 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{w.word}</p>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs dark:bg-slate-700">{w.topic}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300">{w.meaning_vi}</p>
            <p className="mt-1 text-xs text-slate-500">Chunks: {w.collocations.map((c) => c.chunk).join(' • ')}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
