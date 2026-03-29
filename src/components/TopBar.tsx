import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Settings, User } from 'lucide-react';

export const TopBar = () => {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-8 h-20 bg-background/80 backdrop-blur-xl z-50 bg-gradient-to-b from-background to-transparent">
      <div className="text-2xl font-black tracking-tighter text-primary-container uppercase font-headline">
        CRIMSON ARCHIVE
      </div>
      
      <nav className="hidden md:flex gap-8 items-center font-headline font-bold tracking-tight">
        <NavLink to="/pokedex" className={({ isActive }) => isActive ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-on-surface hover:text-primary transition-colors'}>
          Pokedex
        </NavLink>
        <NavLink to="/trainers" className={({ isActive }) => isActive ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-on-surface hover:text-primary transition-colors'}>
          Trainers
        </NavLink>
        <NavLink to="/encounters" className={({ isActive }) => isActive ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-on-surface hover:text-primary transition-colors'}>
          Encounters
        </NavLink>
      </nav>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={16} />
          <input
            type="text"
            placeholder="Search Archive..."
            className="bg-surface-container-highest border-none rounded-sm px-4 py-2 pl-10 text-sm w-64 focus:ring-1 focus:ring-primary-container text-on-surface placeholder:text-on-surface-variant/50"
          />
        </div>
        <button className="text-on-surface hover:bg-surface-container-high/50 transition-all duration-300 p-2 rounded-full">
          <Settings size={20} />
        </button>
        <button className="text-on-surface hover:bg-surface-container-high/50 transition-all duration-300 p-2 rounded-full">
          <User size={20} />
        </button>
      </div>
    </header>
  );
};
