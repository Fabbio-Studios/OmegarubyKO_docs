/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Home } from './pages/Home';
import { Pokedex } from './pages/Pokedex';
import { Trainers } from './pages/Trainers';
import { EliteFour } from './pages/EliteFour';
import { Encounters } from './pages/Encounters';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex bg-background min-h-screen text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <Sidebar />
      <div className="flex-1 lg:ml-64 flex flex-col">
        <TopBar />
        <main className="flex-1 relative">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/trainers" element={<Navigate replace to="/gym-leaders" />} />
              <Route path="/gym-leaders" element={<Trainers />} />
              <Route path="/elite-four" element={<EliteFour />} />
              <Route path="/encounters" element={<Encounters />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className="py-12 px-8 border-t border-white/5 bg-surface-container-low text-on-surface-variant text-xs font-label tracking-widest uppercase flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 CRIMSON ARCHIVE. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
