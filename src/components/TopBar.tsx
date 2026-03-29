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
        <NavLink to="/gym-leaders" className={({ isActive }) => isActive ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-on-surface hover:text-primary transition-colors'}>
          Gym Leaders
        </NavLink>
        <NavLink to="/elite-four" className={({ isActive }) => isActive ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-on-surface hover:text-primary transition-colors'}>
          Elite Four
        </NavLink>
        <NavLink to="/encounters" className={({ isActive }) => isActive ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-on-surface hover:text-primary transition-colors'}>
          Encounters
        </NavLink>
      </nav>

      <div className="flex items-center gap-4">
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
