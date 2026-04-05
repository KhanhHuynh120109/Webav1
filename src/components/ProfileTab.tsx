import type { UserSettings } from '../types';

interface Props {
  settings: UserSettings;
  onChange: (settings: UserSettings) => void;
  onResetProgress: () => void;
  stats: {
    streak: number;
    learnedWords: number;
    learnedChunks: number;
    strongTopic: string;
    weakTopic: string;
    dueToday: number;
  };
}

export function ProfileTab({ settings, onChange, onResetProgress, stats }: Props) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold">Hồ sơ & Cài đặt</h2>
      <article className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-800">
        <h3 className="font-semibold">Dashboard tiến độ</h3>
        <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>🔥 Streak: {stats.streak} ngày</li>
          <li>📘 Số từ đã học: {stats.learnedWords}</li>
          <li>🧩 Số chunks đã học: {stats.learnedChunks}</li>
          <li>💪 Chủ đề mạnh: {stats.strongTopic}</li>
          <li>🎯 Chủ đề yếu: {stats.weakTopic}</li>
          <li>⏰ Từ cần ôn hôm nay: {stats.dueToday}</li>
        </ul>
      </article>

      <article className="space-y-3 rounded-2xl bg-white p-4 dark:bg-slate-800">
        <label className="text-sm">Mục tiêu từ mỗi ngày: {settings.dailyGoal}</label>
        <input type="range" min={5} max={40} value={settings.dailyGoal} onChange={(e) => onChange({ ...settings, dailyGoal: Number(e.target.value) })} className="w-full" />

        <label className="text-sm">Số từ mỗi phiên: {settings.wordsPerSession}</label>
        <input type="range" min={5} max={20} value={settings.wordsPerSession} onChange={(e) => onChange({ ...settings, wordsPerSession: Number(e.target.value) })} className="w-full" />

        <div className="grid grid-cols-3 gap-2 text-sm">
          {['topic', 'chunk', 'review'].map((mode) => (
            <button key={mode} onClick={() => onChange({ ...settings, preferredMode: mode as UserSettings['preferredMode'] })}
              className={`rounded-xl px-2 py-2 ${settings.preferredMode === mode ? 'bg-primary-500 text-white' : 'bg-slate-100 dark:bg-slate-700'}`}>
              {mode}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm">
          {['light', 'dark', 'system'].map((theme) => (
            <button key={theme} onClick={() => onChange({ ...settings, theme: theme as UserSettings['theme'] })}
              className={`rounded-xl px-2 py-2 ${settings.theme === theme ? 'bg-slate-900 text-white dark:bg-primary-500' : 'bg-slate-100 dark:bg-slate-700'}`}>
              {theme}
            </button>
          ))}
        </div>

        <button onClick={onResetProgress} className="w-full rounded-xl bg-rose-100 px-3 py-2 text-sm font-semibold text-rose-700 dark:bg-rose-900/40 dark:text-rose-200">Reset progress</button>
      </article>
    </section>
  );
}
