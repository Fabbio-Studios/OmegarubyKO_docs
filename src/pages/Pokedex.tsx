import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, SortAsc, Bolt, Lock, X, Sword, Zap, CircleDashed, ChevronRight, Info } from 'lucide-react';
import { POKEMON_DATA, TYPE_COLORS } from '../data';
import { Pokemon, Move } from '../types';

export const Pokedex = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [generation, setGeneration] = useState<'ALL' | 'GEN III'>('ALL');
  const [selectedPokemonForMoves, setSelectedPokemonForMoves] = useState<Pokemon | null>(null);

  const allTypes = useMemo(() => {
    const types = new Set<string>();
    POKEMON_DATA.forEach(p => p.types.forEach(t => types.add(t)));
    return Array.from(types).sort();
  }, []);

  const filteredPokemon = useMemo(() => {
    return POKEMON_DATA.filter(pokemon => {
      const matchesSearch = pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            pokemon.id.toString().includes(searchQuery);
      
      const matchesType = selectedTypes.length === 0 || 
                          selectedTypes.every(t => pokemon.types.includes(t));
      
      const matchesGen = generation === 'ALL' || (pokemon.id >= 252 && pokemon.id <= 386); // Simple Gen 3 check for Hoenn

      return matchesSearch && matchesType && matchesGen;
    });
  }, [searchQuery, selectedTypes, generation]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const getTypeStyles = (type: string) => {
    return TYPE_COLORS[type] || { bg: 'bg-surface-container-highest', text: 'text-on-surface', border: 'border-primary-container/50' };
  };

  return (
    <div className="pt-24 pb-32 px-4 md:px-12">
      <header className="mb-12">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-4 uppercase">NATIONAL DEX</h1>
        <p className="font-body text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          The definitive tactical dossier for <span className="text-primary-container font-bold italic">Omega Ruby Kaizo Origins</span>. Every entry details essential buffs and technical modifications.
        </p>
      </header>

      {/* Filters Strip */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <div className="md:col-span-1 bg-surface-container-low p-4 rounded-xl">
          <span className="font-label text-[10px] text-primary-container font-black uppercase tracking-widest block mb-2">Generation</span>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setGeneration('GEN III')}
              className={`px-3 py-1 text-xs font-bold rounded transition-colors ${generation === 'GEN III' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-highest text-on-surface hover:bg-surface-bright'}`}
            >
              GEN III
            </button>
            <button 
              onClick={() => setGeneration('ALL')}
              className={`px-3 py-1 text-xs font-bold rounded transition-colors ${generation === 'ALL' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-highest text-on-surface hover:bg-surface-bright'}`}
            >
              ALL
            </button>
          </div>
        </div>
        <div className="md:col-span-3 bg-surface-container-low p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <span className="font-label text-[10px] text-primary-container font-black uppercase tracking-widest block mb-2">Search & Type Filters</span>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="relative flex-1 min-w-[200px]">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                <input 
                  type="text"
                  placeholder="Search by name or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface-container-highest border-none rounded-lg py-2 pl-10 pr-4 text-xs font-body focus:ring-1 focus:ring-primary-container outline-none transition-all"
                />
              </div>
              {selectedTypes.map(type => {
                const styles = getTypeStyles(type);
                return (
                  <span key={type} className={`${styles.bg} ${styles.text} px-3 py-1 rounded text-[10px] font-bold border ${styles.border} flex items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.2)]`}>
                    {type} <X size={10} className="cursor-pointer" onClick={() => toggleType(type)} />
                  </span>
                );
              })}
              <div className="relative group">
                <button className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                  <Filter size={12} /> Add Filter
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-surface-container-high rounded-xl shadow-2xl p-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="grid grid-cols-2 gap-1">
                    {allTypes.map(type => {
                      const styles = getTypeStyles(type);
                      const isActive = selectedTypes.includes(type);
                      return (
                        <button
                          key={type}
                          onClick={() => toggleType(type)}
                          className={`text-[10px] font-bold p-2 rounded text-left transition-colors ${isActive ? `${styles.bg} ${styles.text} border ${styles.border}` : 'hover:bg-surface-container-highest text-on-surface-variant'}`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="flex items-center gap-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest hover:text-on-surface transition-colors">
              <SortAsc size={16} /> Sort by ID
            </button>
          </div>
        </div>
      </div>

      {/* Pokedex Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredPokemon.map((pokemon) => (
          <motion.div
            key={pokemon.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8 }}
            className="group relative bg-surface-container-low rounded-xl overflow-visible transition-all duration-300 hover:bg-surface-container-high cursor-pointer"
          >
            <div className="absolute -top-12 right-4 w-32 h-32 z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-500">
              <img
                src={pokemon.imageUrl}
                alt={pokemon.name}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 pt-16">
              <span className="font-label text-[10px] text-on-surface-variant/50 font-bold tracking-widest">#{pokemon.id}</span>
              <h3 className="font-headline text-2xl font-black text-on-surface mb-3 tracking-tight uppercase">{pokemon.name}</h3>
              <div className="flex gap-2 mb-6">
                {pokemon.types.map((type) => {
                  const styles = getTypeStyles(type);
                  return (
                    <div key={type} className={`${styles.bg} px-3 py-1 rounded-sm flex items-center gap-2 border-l-2 ${styles.border}`}>
                      <span className={`font-label text-[10px] font-black tracking-widest ${styles.text} uppercase`}>{type}</span>
                    </div>
                  );
                })}
              </div>
              <div className="bg-primary-container/10 p-3 rounded-lg border border-primary-container/20 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <Info size={14} className="text-primary-container" />
                  <span className="font-label text-[10px] font-black text-primary-container uppercase tracking-widest">Ability: {pokemon.ability}</span>
                </div>
                <p className="text-[11px] text-on-surface-variant font-medium italic leading-tight">{pokemon.abilityDescription}</p>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPokemonForMoves(pokemon);
                }}
                className="w-full py-2 bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label text-[10px] font-black uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Sword size={12} /> View Moveset
              </button>
            </div>
            <div className="h-1 w-0 group-hover:w-full bg-primary-container transition-all duration-500 rounded-b-xl"></div>
          </motion.div>
        ))}
        {filteredPokemon.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-on-surface-variant font-body italic">No data matches your current filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedTypes([]); setGeneration('ALL'); }}
              className="mt-4 text-primary-container font-bold uppercase tracking-widest text-xs hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Placeholder Locked Cards - only show if no search/filter active for aesthetic */}
        {searchQuery === '' && selectedTypes.length === 0 && generation === 'ALL' && [1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-surface-container-low/40 border border-white/5 rounded-xl h-64 flex flex-col items-center justify-center group hover:bg-surface-container-low transition-colors duration-300">
            <Lock size={40} className="text-on-surface-variant/20 mb-2 group-hover:text-primary-container/40" />
            <span className="font-label text-[10px] font-black tracking-widest text-on-surface-variant/30 uppercase">LOCKED DATA</span>
          </div>
        ))}
      </section>

      {/* Moveset Modal */}
      {selectedPokemonForMoves && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-surface-container w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/5"
          >
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-surface-container-high">
              <div className="flex items-center gap-4">
                <img src={selectedPokemonForMoves.imageUrl} alt={selectedPokemonForMoves.name} className="w-16 h-16 object-contain" />
                <div>
                  <h2 className="font-headline text-3xl font-black text-on-surface uppercase tracking-tight">{selectedPokemonForMoves.name}</h2>
                  <p className="font-label text-xs text-primary-container font-bold tracking-widest">MOVESET DOSSIER</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedPokemonForMoves(null)}
                className="p-2 hover:bg-surface-bright rounded-full transition-colors text-on-surface-variant"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-8">
                {/* Level Up Moves */}
                <div>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
                    <ChevronRight size={18} className="text-primary-container" />
                    LEVEL UP MOVES
                  </h3>
                  <div className="space-y-2">
                    {selectedPokemonForMoves.moveset.filter(m => !m.isRelearner).sort((a,b) => (a.level || 0) - (b.level || 0)).map((move, idx) => (
                      <MoveRow key={idx} move={move} />
                    ))}
                  </div>
                </div>

                {/* Relearner Moves */}
                <div>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
                    <ChevronRight size={18} className="text-primary-container" />
                    MOVE RELEARNER
                  </h3>
                  <div className="space-y-2">
                    {selectedPokemonForMoves.moveset.filter(m => m.isRelearner).map((move, idx) => (
                      <MoveRow key={idx} move={move} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-surface-container-low text-center">
              <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-[0.2em]">Tactical Data Verified by Crimson Archive</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const MoveRow: React.FC<{ move: Move }> = ({ move }) => {
  const styles = TYPE_COLORS[move.type] || { bg: 'bg-surface-container-highest', text: 'text-on-surface', border: 'border-primary-container/50' };
  
  const getCategoryIcon = () => {
    switch (move.category) {
      case 'PHYSICAL': return <Sword size={12} />;
      case 'SPECIAL': return <Zap size={12} />;
      case 'STATUS': return <CircleDashed size={12} />;
    }
  };

  return (
    <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-white/5 hover:border-primary-container/30 transition-colors group">
      <div className="flex items-center gap-4">
        <div className="w-10 text-center">
          <span className="font-label text-xs font-bold text-primary-container">
            {move.isRelearner ? 'RE' : `L.${move.level}`}
          </span>
        </div>
        <div>
          <p className="font-body font-bold text-on-surface group-hover:text-primary-container transition-colors uppercase tracking-wide">{move.name}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`${styles.bg} ${styles.text} px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter border ${styles.border}`}>
              {move.type}
            </span>
            <span className="flex items-center gap-1 text-on-surface-variant text-[9px] font-bold uppercase tracking-widest">
              {getCategoryIcon()} {move.category}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 pr-4">
        <div className="text-right">
          <p className="text-[9px] font-label text-on-surface-variant uppercase tracking-widest">Power</p>
          <p className="font-headline font-bold text-on-surface">{move.power || '--'}</p>
        </div>
        <div className="text-right">
          <p className="text-[9px] font-label text-on-surface-variant uppercase tracking-widest">Acc</p>
          <p className="font-headline font-bold text-on-surface">{move.accuracy ? `${move.accuracy}%` : '--'}</p>
        </div>
      </div>
    </div>
  );
};
