import { Home, Map, Plus, Activity, Bookmark, User } from 'lucide-react';
import { Page } from './Router';

interface BottomNavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function BottomNavigation({ currentPage, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { icon: Home, label: "Home", page: "Home" as Page },
    { icon: Map, label: "Map", page: "Map" as Page },
    { icon: Activity, label: "Fitness", page: "FitnessEvents" as Page },
    { icon: Plus, label: "Add Post", page: "AddPost" as Page },
    { icon: Bookmark, label: "Saved", page: "Saved" as Page },
    { icon: User, label: "Profile", page: "Profile" as Page }
  ];

  return (
    <div className="bg-black/30 backdrop-blur-lg border-t border-white/10 px-4 py-3 shadow-lg" data-bravo="[container]" style={{
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(12px)'
    }}>
      <div className="flex items-center justify-around max-w-sm mx-auto">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = currentPage === item.page;
          return (
            <button
              key={index}
              className={`relative flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-200 ${
                isActive 
                  ? 'bg-white/20 transform scale-105' 
                  : 'hover:bg-white/10 active:scale-95'
              }`}
              onClick={() => onNavigate(item.page)}
              data-bravo={`[link:${item.page}]`}
            >
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
              )}
              <IconComponent 
                className={`w-5 h-5 transition-colors ${
                  isActive ? 'text-white' : 'text-white/70'
                }`} 
              />
              <span className={`text-xs transition-colors ${
                isActive ? 'text-white font-semibold' : 'text-white/70'
              }`} data-bravo="[text]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}