import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Users, Shield, X, ChevronRight, Sword, Zap, CircleDashed } from 'lucide-react';
import { TRAINER_DATA, TYPE_COLORS } from '../data';
import { Trainer, TrainerPokemon } from '../types';

export const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = React.useState<Trainer | null>(null);

  const getTypeStyles = (specialty: string) => {
    const type = specialty.split(' ')[0].toUpperCase();
    return TYPE_COLORS[type] || { bg: 'bg-surface-container-highest', text: 'text-primary-container', border: 'border-primary-container' };
  };

  return (
    <div className="pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <section className="mb-16">
        <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-on-background mb-4 uppercase">Elite <span className="text-primary-container">Encounters</span></h1>
        <p className="max-w-2xl text-on-surface-variant font-body text-lg leading-relaxed">The Hoenn region has been redefined. Below are the tactical profiles for the strongest trainers in Omega Ruby Kaizo Origins. Prepare for adaptive AI and perfect IV spreads.</p>
      </section>

      {/* Gym Leaders */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-black font-headline tracking-widest text-primary-container uppercase">Gym Leaders</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary-container/30 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {TRAINER_DATA.map((trainer) => {
            const styles = getTypeStyles(trainer.specialty);
            return (
              <div key={trainer.id} className="relative group crimson-glow-card bg-surface-container-low p-8 rounded-xl transition-all duration-500 hover:bg-surface-container overflow-hidden">
                <div className="absolute -top-12 -right-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                  <img src={trainer.typeIconUrl} alt="Type" className="w-64 h-64 grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="w-full md:w-48 h-64 bg-surface-container-high rounded-lg overflow-hidden shrink-0 border-2 border-transparent group-hover:border-primary-container/30 transition-all">
                    <img src={trainer.imageUrl} alt={trainer.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-4xl font-black font-headline text-on-background uppercase">{trainer.name}</h3>
                        <span className={`inline-block mt-2 px-3 py-1 ${styles.bg} rounded border-l-2 ${styles.border} text-[10px] font-label font-bold tracking-[0.2em] ${styles.text} uppercase`}>{trainer.specialty}</span>
                      </div>
                      <span className="text-primary-container font-headline font-black text-3xl">{trainer.id}</span>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-2">
                      {trainer.pokemon.map((p, idx) => (
                        <div key={idx} className={`bg-surface-container-lowest p-2 rounded flex flex-col items-center ${p.isAce ? 'ring-1 ring-primary-container/50' : ''}`}>
                          <img src={p.imageUrl} alt={p.name} className="w-10 h-10 object-contain mb-1" referrerPolicy="no-referrer" />
                          <span className={`text-[8px] font-label uppercase ${p.isAce ? 'text-primary-container' : 'text-on-surface-variant'}`}>Lvl. {p.level}</span>
                          <span className="text-[10px] font-bold font-body truncate w-full text-center">{p.name}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setSelectedTrainer(trainer)}
                      className="mt-8 w-full py-3 bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest text-xs rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      Reveal Kaizo Strategy <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trainer Strategy Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTrainer(null)}
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-4xl bg-surface-container-low rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-surface-container">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <Shield className="text-primary-container" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black font-headline text-on-background uppercase tracking-tight">{selectedTrainer.name}'s Tactical Dossier</h2>
                  <p className="text-[10px] font-label text-primary-container font-bold tracking-[0.3em] uppercase">{selectedTrainer.specialty}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedTrainer(null)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-on-surface-variant"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {selectedTrainer.pokemon.map((p, idx) => (
                  <div key={idx} className={`bg-surface-container-lowest p-4 md:p-5 rounded-xl border border-white/5 relative overflow-hidden group ${p.isAce ? 'ring-1 ring-primary-container/30' : ''}`}>
                    {p.isAce && (
                      <div className="absolute top-0 right-0 bg-primary-container text-on-primary-container text-[8px] font-black px-3 py-1 rounded-bl-lg uppercase tracking-widest z-10">
                        ACE UNIT
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-surface-container rounded-lg p-1 shrink-0">
                        <img src={p.imageUrl} alt={p.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <h4 className="font-headline font-black text-lg text-on-background uppercase tracking-tight">{p.name}</h4>
                        <p className="text-[10px] font-label text-on-surface-variant font-bold uppercase tracking-widest">Level {p.level}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-[9px] font-label text-primary-container font-bold uppercase tracking-widest mb-1">Ability</p>
                        <p className="text-xs font-bold font-body text-on-surface uppercase">{p.ability}</p>
                      </div>
                      
                      {p.heldItem && (
                        <div>
                          <p className="text-[9px] font-label text-primary-container font-bold uppercase tracking-widest mb-1">Held Item</p>
                          <div className="flex items-center gap-2 bg-surface-container px-2 py-1 rounded border border-white/5">
                            <span className="text-xs font-bold font-body text-on-surface uppercase">{p.heldItem}</span>
                          </div>
                        </div>
                      )}

                      <div>
                        <p className="text-[9px] font-label text-primary-container font-bold uppercase tracking-widest mb-1">Moveset</p>
                        <div className="grid grid-cols-1 gap-1">
                          {p.moves.map((move, midx) => (
                            <div key={midx} className="flex items-center gap-2 bg-surface-container/50 px-2 py-1.5 rounded text-[10px] font-bold font-body text-on-surface-variant uppercase border border-white/5 group-hover:border-primary-container/20 transition-colors">
                              <div className="w-1 h-1 rounded-full bg-primary-container/40"></div>
                              {move}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-surface-container text-center border-t border-white/5">
              <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-[0.2em]">Strategic Analysis Provided by Crimson Archive</p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Champion Section */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-black font-headline tracking-widest text-primary-container uppercase">The Champion</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary-container/30 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-8 bg-surface-container-high rounded-xl overflow-hidden relative group">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png"
              alt="Steven Stone"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-6xl md:text-8xl font-black font-headline uppercase text-on-background tracking-tighter">Steven <span className="text-primary-container">Stone</span></h3>
              <p className="text-primary-container font-label font-bold tracking-[0.5em] mt-4 uppercase">KAIZO ORIGINS ULTIMATE CHALLENGE</p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-surface-container-low p-8 rounded-xl border border-white/5 crimson-glow-card">
              <div className="flex items-center justify-between mb-6">
                <span className="font-label text-xs text-on-surface-variant font-bold tracking-widest uppercase">FINAL TEAM</span>
                <span className="bg-primary-container px-2 py-0.5 text-[10px] rounded font-bold text-on-primary-container">LVL 100</span>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="font-bold text-on-background">Metagross (Mega)</span>
                  <Star size={14} className="text-primary-container" fill="currentColor" />
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="font-bold text-on-background">Skarmory</span>
                  <span className="text-[10px] font-label opacity-50 uppercase">Steel/Flying</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="font-bold text-on-background">Aggron (Mega)</span>
                  <Star size={14} className="text-primary-container" fill="currentColor" />
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="font-bold text-on-background">Cradily</span>
                  <span className="text-[10px] font-label opacity-50 uppercase">Rock/Grass</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="font-bold text-on-background">Armaldo</span>
                  <span className="text-[10px] font-label opacity-50 uppercase">Rock/Bug</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="font-bold text-on-background">Excadrill</span>
                  <span className="text-[10px] font-label opacity-50 uppercase">Ground/Steel</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-container p-6 rounded-xl flex flex-col justify-center text-center text-on-primary-container">
              <h4 className="font-headline font-black text-xl uppercase tracking-tight">Access Strategy Vault</h4>
              <p className="text-[10px] font-label opacity-80 mt-1 uppercase">RESTRICTED TO TOP-TIER TRAINERS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
