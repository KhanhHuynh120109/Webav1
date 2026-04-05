import { useMemo, useState } from 'react';
import { BottomNav, type TabKey } from './components/BottomNav';
import { HomeTab } from './components/HomeTab';
import { LearnTab } from './components/LearnTab';
import { ProfileTab } from './components/ProfileTab';
import { ReviewTab } from './components/ReviewTab';
import { SearchTab } from './components/SearchTab';
import { useAppState } from './hooks/useAppState';

export default function App() {
  const [tab, setTab] = useState<TabKey>('home');
  const state = useAppState();

  const topicPerformance = useMemo(() => {
    const byTopic = new Map<string, { correct: number; total: number }>();
    state.vocabularyData.forEach((word) => {
      const current = byTopic.get(word.topic) ?? { correct: 0, total: 0 };
      const progress = state.progressMap[word.id];
      current.total += 1;
      current.correct += progress?.correctCount ?? 0;
      byTopic.set(word.topic, current);
    });
    const list = [...byTopic.entries()].map(([topic, value]) => ({ topic, score: value.correct / Math.max(1, value.total) }));
    list.sort((a, b) => b.score - a.score);
    return {
      strong: list[0]?.topic ?? 'daily-life',
      weak: list[list.length - 1]?.topic ?? 'work-career',
    };
  }, [state.vocabularyData, state.progressMap]);

  return (
    <div className="mx-auto min-h-screen max-w-md bg-slate-50 px-3 pb-24 pt-3 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      {tab === 'home' && (
        <HomeTab
          learnedWords={state.learnedWords}
          learnedChunks={state.learnedChunks}
          dueCount={state.dueWords.length}
          nextLesson={state.nextLesson}
          statusCount={state.statusCount}
          streak={state.streak}
          onStartLearning={() => setTab('learn')}
        />
      )}

      {tab === 'learn' && (
        <LearnTab
          progressMap={state.progressMap}
          onRemember={(id) => state.updateWord(id, true)}
          onForget={(id) => state.updateWord(id, false)}
          onToggleFavorite={state.toggleFavorite}
        />
      )}

      {tab === 'review' && (
        <ReviewTab
          wordsDue={state.dueWords}
          progressMap={state.progressMap}
          onRemember={(id) => state.updateWord(id, true)}
          onForget={(id) => state.updateWord(id, false)}
        />
      )}

      {tab === 'search' && <SearchTab words={state.vocabularyData} />}

      {tab === 'profile' && (
        <ProfileTab
          settings={state.settings}
          onChange={state.setSettings}
          onResetProgress={state.resetProgress}
          stats={{
            streak: state.streak,
            learnedWords: state.learnedWords,
            learnedChunks: state.learnedChunks,
            strongTopic: topicPerformance.strong,
            weakTopic: topicPerformance.weak,
            dueToday: state.dueWords.length,
          }}
        />
      )}

      <BottomNav activeTab={tab} onChange={setTab} />
    </div>
  );
}
