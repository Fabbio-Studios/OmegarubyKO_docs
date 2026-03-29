import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Database, Users, Shield, Sparkles, Settings, HelpCircle } from 'lucide-react';

export const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Database, label: 'National Dex', path: '/pokedex' },
    { icon: Users, label: 'Gym Leaders', path: '/gym-leaders' },
    { icon: Shield, label: 'Elite Four', path: '/elite-four' },
    { icon: Sparkles, label: 'Legendaries', path: '/legendaries' },
  ];

  return (
    <aside className="hidden lg:flex flex-col border-r border-white/5 h-screen w-64 left-0 top-0 fixed bg-surface-container-low z-40 font-body font-medium antialiased shadow-[20px_0_40px_rgba(0,0,0,0.4)]">
      <div className="pt-24 px-6 pb-8">
        <div className="text-lg font-bold text-on-surface">DATABASE</div>
        <div className="text-[10px] text-primary tracking-[0.2em] font-bold">V1.0.2-ORIGINS</div>
      </div>
      
      <nav className="flex-1 flex flex-col">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-6 transition-all duration-200 ${
                isActive
                  ? 'text-primary-container border-l-4 border-primary-container bg-gradient-to-r from-primary-container/10 to-transparent translate-x-1'
                  : 'text-on-surface/60 hover:text-on-surface hover:bg-surface-container-high'
              }`
            }
          >
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 flex flex-col gap-2 border-t border-white/5">
        <a href="#" className="flex items-center gap-3 text-on-surface/40 hover:text-on-surface text-sm transition-colors">
          <Settings size={16} /> Settings
        </a>
        <a href="#" className="flex items-center gap-3 text-on-surface/40 hover:text-on-surface text-sm transition-colors">
          <HelpCircle size={16} /> Support
        </a>
      </div>
    </aside>
  );
};
