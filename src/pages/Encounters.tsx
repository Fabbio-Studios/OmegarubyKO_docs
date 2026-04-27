import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Settings, User, Play, Leaf, Info, AlertTriangle } from 'lucide-react';
import { TYPE_COLORS } from '../data';
import { ROUTE_ENCOUNTERS } from '../pokemonData';

export const Encounters = () => {
  const [activeRoute, setActiveRoute] = useState(ROUTE_ENCOUNTERS[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoutes = ROUTE_ENCOUNTERS.filter(route =>
    route.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!filteredRoutes.find(route => route.id === activeRoute.id)) {
      setActiveRoute(filteredRoutes[0] || ROUTE_ENCOUNTERS[0]);
    }
  }, [searchTerm, filteredRoutes, activeRoute.id]);

  const getTypeStyles = (type: string) => {
    const upperType = type.toUpperCase();
    return TYPE_COLORS[upperType] || { bg: 'bg-surface-container-highest', text: 'text-on-surface', border: 'border-primary-container/50' };
  };

  return (
    <div className="pt-32 pb-32 px-4 md:px-12 max-w-7xl mx-auto min-h-screen">
      <section className="mb-16">
        <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter uppercase mb-4 text-on-surface">Encounters</h1>
        <p className="text-on-surface-variant max-w-xl text-lg font-body leading-relaxed">
          A tactical intelligence report on Hoenn's wildlife distribution. Navigate the routes of the Origins region and secure your roster.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Route List */}
        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-28 space-y-4">
            <h3 className="font-label font-bold text-[10px] tracking-[0.2em] uppercase text-primary-container mb-4 px-2">Hoenn Routes</h3>
            <div className="relative mb-4">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
              <input
                type="text"
                placeholder="Search routes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-white/10 rounded-lg text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary-container"
              />
            </div>
            <div className="space-y-1">
              {filteredRoutes.map((route) => (
                <div
                  key={route.id}
                  onClick={() => setActiveRoute(route)}
                  className={`flex items-center gap-4 p-3 rounded-lg group cursor-pointer transition-all ${
                    route.id === activeRoute.id ? 'bg-surface-container-high' : 'hover:bg-surface-container-low'
                  }`}
                >
                  <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={route.imageUrl}
                      alt={route.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        route.id === activeRoute.id ? 'grayscale-0 opacity-100' : 'grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-headline font-bold truncate ${route.id === activeRoute.id ? 'text-primary-container' : 'text-on-surface'}`}>
                      {route.name}
                    </p>
                    <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">{route.description}</p>
                  </div>
                  {route.id === activeRoute.id && (
                    <Play size={16} className="text-primary-container" fill="currentColor" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Route Details */}
        <div className="lg:col-span-8">
          <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-2xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src={activeRoute.imageUrl}
                alt={activeRoute.name}
                className="w-full h-full object-cover scale-110 blur-[2px] brightness-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></span>
                  <span className="font-label text-[10px] font-bold tracking-[0.3em] uppercase text-primary-container">Location Profile</span>
                </div>
                <h2 className="text-5xl font-black font-headline tracking-tighter text-on-surface uppercase">{activeRoute.name}</h2>
                <p className="text-primary-container font-bold font-label tracking-widest text-xs mt-1 uppercase">Recommended Level: {activeRoute.levelRange}</p>
              </div>
            </div>

            <div className="p-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="font-label text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">
                    <th className="pb-6 pl-4">Pokémon</th>
                    <th className="pb-6">Method</th>
                    <th className="pb-6 text-right pr-4">Rarity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-body">
                  {activeRoute.encounters.map((encounter, idx) => {
                    const styles = getTypeStyles(encounter.type);
                    return (
                      <tr key={idx} className="group hover:bg-surface-container-high transition-colors">
                        <td className="py-5 pl-4 flex items-center gap-4">
                          <div className="w-14 h-14 bg-surface-container-highest rounded-lg flex items-center justify-center p-2 relative">
                            <div className="absolute top-0 left-0 w-0.5 h-full bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src={`https://picsum.photos/seed/${encounter.pokemonName}/100/100`} alt={encounter.pokemonName} className="w-full h-full object-contain opacity-80" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <p className="font-headline font-bold text-lg text-on-surface">{encounter.pokemonName}</p>
                            <span className={`font-label text-[10px] uppercase tracking-wider ${styles.text}`}>{encounter.type}</span>
                          </div>
                        </td>
                        <td className="py-5">
                          <div className="flex items-center gap-2 text-on-surface-variant">
                            <Leaf size={14} />
                            <span className="text-sm">{encounter.method}</span>
                          </div>
                        </td>
                        <td className="py-5 text-right pr-4">
                          <span className="font-headline font-extrabold text-2xl text-primary-container">{encounter.rarity}</span>
                          <p className="text-[9px] text-on-surface-variant uppercase tracking-widest font-label mt-1">{encounter.rarityLabel}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-surface-container-high rounded-xl relative overflow-hidden group">
              <Info size={120} className="absolute -right-8 -bottom-8 opacity-5 text-on-surface-variant group-hover:scale-110 transition-transform duration-700" />
              <h4 className="font-headline font-bold text-lg mb-2 text-on-surface">Area Peculiarities</h4>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Early morning encounters show increased Wurmple activity. Be wary of Poochyena packs near the transition to Route 102.</p>
            </div>
            <div className="p-8 border border-primary-container/20 rounded-xl bg-gradient-to-br from-primary-container/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-primary-container" size={24} />
                <h4 className="font-headline font-bold text-lg text-on-surface">Kaizo Warning</h4>
              </div>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Wild encounters on this route are scaled to level 8+. Do not enter without a balanced party.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
