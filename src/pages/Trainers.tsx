import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Users, Shield } from 'lucide-react';
import { TRAINER_DATA, TYPE_COLORS } from '../data';

export const Trainers = () => {
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
                          <span className={`text-[9px] font-label uppercase ${p.isAce ? 'text-primary-container' : 'text-on-surface-variant'}`}>Lvl. {p.level}</span>
                          <span className="text-xs font-bold font-body">{p.name}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-8 w-full py-3 bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest text-xs rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group/btn">
                      Reveal Kaizo Strategy <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Champion Section */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-black font-headline tracking-widest text-primary-container uppercase">The Champion</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary-container/30 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-8 bg-surface-container-high rounded-xl overflow-hidden relative group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApKqSe-R64z0jNW6hgQt5hnOkThBXN_ghLhyaih-u5X4pxgk-EVEAN-106tx9D-BLMeWElbMc3vsg0lx7PBokbvXDChYPAVEbBiEufhuC2kfoVXHZHr9kLPSeuyBYVZddZgaxjC-4U69OEwZn7g22TYVQQmQPEVh9J2KAeM7QAL9h7WMa_PorXNpxKjJa2RuYRfQuNMOF9xrNGxOtbuGBahVbC67HJZCTzrZctYFDZ4STf4rrapSA0S4CkRtDtQ-6oRkYrBKGXNA"
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
                {['Skarmory', 'Aggron', 'Cradily', 'Armaldo', 'Excadrill'].map((p) => (
                  <li key={p} className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="font-body text-on-surface-variant">{p}</span>
                    <span className="text-[10px] font-label opacity-50 uppercase">Tactical</span>
                  </li>
                ))}
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
