import { useState, useEffect } from 'react';
import { User, Filter, Briefcase, BookOpen } from 'lucide-react';

const navItems = [
  { id: 'profile', label: 'Profile Snapshot', shortLabel: 'Profile', icon: User },
  { id: 'triage', label: 'Triage Engine', shortLabel: 'Triage', icon: Filter },
  { id: 'ledger', label: 'Deal Ledger', shortLabel: 'Ledger', icon: Briefcase },
  { id: 'research', label: 'Ecosystem Research', shortLabel: 'Research', icon: BookOpen },
];

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for trigger point

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sticky Sidebar Navigation */}
      <aside className="hidden md:block w-full md:w-64 md:shrink-0 md:sticky md:top-12 self-start space-y-8 font-sans">
        <div className="flex flex-col space-y-6 border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-6 rounded-lg">
          {/* Profile Card Header in Sidebar */}
          <div className="space-y-1">
            <div className="h-2 w-10 bg-white rounded-full"></div>
            <h2 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase font-mono">PORTFOLIO INDEX</h2>
          </div>

          {/* Navigation List */}
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? 'bg-zinc-900 border-zinc-800 text-white font-semibold'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                  }`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Floating Navigation Bar (Pill UI with dynamic active text) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-zinc-950/80 backdrop-blur-lg border border-zinc-900 px-3 py-2 rounded-full shadow-2xl gap-1 max-w-[95vw] w-max">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center justify-center gap-1.5 p-2 rounded-full transition-all duration-300 border ${
                isActive
                  ? 'bg-white border-white text-black px-3.5 scale-105 shadow-md shadow-black/40'
                  : 'bg-transparent border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
              title={item.label}
            >
              <Icon className="h-4.5 w-4.5 shrink-0" />
              {isActive && (
                <span className="text-[11px] font-bold uppercase tracking-wider font-sans whitespace-nowrap">
                  {item.shortLabel}
                </span>
              )}
            </a>
          );
        })}
      </nav>
    </>
  );
}
