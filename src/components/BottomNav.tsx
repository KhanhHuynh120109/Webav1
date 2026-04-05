import { BookOpen, House, RefreshCcw, Search, UserRound } from 'lucide-react';

export type TabKey = 'home' | 'learn' | 'review' | 'search' | 'profile';

const navItems: { key: TabKey; label: string; icon: typeof House }[] = [
  { key: 'home', label: 'Home', icon: House },
  { key: 'learn', label: 'Learn', icon: BookOpen },
  { key: 'review', label: 'Review', icon: RefreshCcw },
  { key: 'search', label: 'Search', icon: Search },
  { key: 'profile', label: 'Profile', icon: UserRound },
];

interface BottomNavProps {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
}

export function BottomNav({ activeTab, onChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/95 pb-[max(0.8rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
      <ul className="mx-auto grid max-w-md grid-cols-5 gap-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.key;
          return (
            <li key={item.key}>
              <button
                type="button"
                onClick={() => onChange(item.key)}
                className={`flex w-full flex-col items-center rounded-xl px-2 py-1.5 text-[11px] ${
                  active ? 'bg-primary-50 text-primary-600 dark:bg-slate-700 dark:text-primary-50' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                <Icon className="mb-1 h-4 w-4" />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
