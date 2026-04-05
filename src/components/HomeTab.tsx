import type { Lesson } from '../types';

interface Props {
  learnedWords: number;
  learnedChunks: number;
  dueCount: number;
  nextLesson: Lesson;
  statusCount: Record<string, number>;
  streak: number;
  onStartLearning: () => void;
}

export function HomeTab({ learnedWords, learnedChunks, dueCount, nextLesson, statusCount, streak, onStartLearning }: Props) {
  const progress = Math.round((learnedWords / 3000) * 100);

  return (
    <section className="space-y-4">
      <header className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 text-white shadow-card">
        <p className="text-xs uppercase tracking-wider">Oxford 3000 Chunk Roadmap</p>
        <h1 className="mt-1 text-xl font-bold">Chinh phục từng cụm, dùng được ngay trong hội thoại</h1>
        <p className="mt-2 text-sm opacity-90">Bạn đã học {learnedWords}/{3000} từ cốt lõi. Tiếp tục 10–15 phút hôm nay nhé.</p>
        <button onClick={onStartLearning} className="mt-3 rounded-xl bg-white px-4 py-2 text-sm font-bold text-blue-700">Học ngay</button>
      </header>

      <div className="grid grid-cols-3 gap-2 text-center">
        <Stat title="Đã học" value={learnedWords.toString()} />
        <Stat title="Đang học" value={statusCount.learning.toString()} />
        <Stat title="Cần ôn" value={dueCount.toString()} highlight />
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
        <h2 className="font-semibold text-slate-900 dark:text-white">Tiến độ tổng Oxford 3000</h2>
        <div className="mt-2 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-700">
          <div className="h-2 rounded-full bg-primary-500" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{progress}% mục tiêu • {learnedChunks} chunks đã luyện • streak {streak} ngày</p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
        <h2 className="font-semibold text-slate-900 dark:text-white">Gợi ý bài học tiếp theo</h2>
        <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-100">{nextLesson.title}</p>
        <p className="text-sm text-slate-500">{nextLesson.description}</p>
        <p className="mt-2 text-xs text-slate-500">Tình huống: {nextLesson.situation}</p>
      </article>

      <div className="rounded-2xl border border-primary-200 bg-primary-50 p-4 text-sm text-primary-700 dark:border-primary-700/50 dark:bg-slate-800 dark:text-primary-100">
        “Học theo cụm để nhớ lâu hơn” — tập trung chunk + context + review.
      </div>
    </section>
  );
}

function Stat({ title, value, highlight = false }: { title: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-3 ${highlight ? 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200' : 'bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200'} border border-slate-200 dark:border-slate-700`}>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs">{title}</p>
    </div>
  );
}
