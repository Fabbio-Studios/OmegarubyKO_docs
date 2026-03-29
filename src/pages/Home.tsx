import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Map, Users, Shield, TrendingUp, Verified, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden px-8 lg:px-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqoaznNQwkzdanULgmWevDFVZ5tusISXX4uxk2pERQXhap0YT5VeVYQAMQtcVZbzyHxInyyh50_bpSEGBfFWok6w5nhjKutMbQWePcVtwBlYJ5O-MyC62gnhtE44E3IwGl5CFCHa4Qh1jRvnEJqE7BSdPaCP9SfWd6f0TOmYOCzTKvXrT4YO_-cnWa1HODtUJ12GJ182z9APpcdRBJDAxK0lp3Je8YGm97pmKobdfC9McU5gYVpgrW-4FmlkB-ajjMzKgcXKzieg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/20 border border-primary-container/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.2em] text-primary-container uppercase font-label">KAIZO LEVEL CHALLENGE</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-none uppercase">
            PRIMAL <br /><span className="text-primary-container">REBIRTH.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl font-body leading-relaxed">
            POKEMON Omega Ruby Kaizo Origins is the ultimate challenge for Hoenn fans, featuring redesigned encounters and enhanced difficulty.
          </p>
          <div className="flex gap-4 pt-4">
            <Link to="/pokedex" className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold font-headline flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all">
              <Play size={20} fill="currentColor" />
              START DATABASE
            </Link>
            <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-bold font-headline transition-all active:scale-95">
              LEARN MORE
            </button>
          </div>
        </motion.div>
      </section>

      {/* Quick Access Bento Grid */}
      <section className="px-8 lg:px-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link to="/pokedex" className="md:col-span-2 group relative overflow-hidden bg-surface-container-low rounded-xl p-8 hover:bg-gradient-to-br hover:from-surface-container-low hover:to-primary-container/10 transition-all duration-500 cursor-pointer">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sparkles size={120} />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="text-primary-container font-black font-label text-[10px] tracking-widest uppercase mb-2 block">Dossier</span>
                <h3 className="text-4xl font-black font-headline mb-4">Pokedex</h3>
                <p className="text-on-surface-variant text-sm max-w-xs">Detailed base stats, movesets, and locations for every Pokémon in the Origins meta.</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-primary-container font-bold">
                EXPLORE <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          <Link to="/trainers" className="group relative overflow-hidden bg-surface-container-low rounded-xl p-8 hover:bg-gradient-to-br hover:from-surface-container-low hover:to-primary-container/10 transition-all duration-500 cursor-pointer">
            <div className="relative z-10">
              <Users className="text-primary-container mb-4 block" size={40} />
              <h3 className="text-2xl font-black font-headline mb-2">Gym Leaders</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">Advanced AI strategies and team compositions for Hoenn's strongest.</p>
            </div>
          </Link>

          <Link to="/trainers" className="group relative overflow-hidden bg-surface-container-low rounded-xl p-8 hover:bg-gradient-to-br hover:from-surface-container-low hover:to-primary-container/10 transition-all duration-500 cursor-pointer">
            <div className="relative z-10">
              <Verified className="text-primary-container mb-4 block" size={40} />
              <h3 className="text-2xl font-black font-headline mb-2">Elite Four</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">Preparation for the ultimate gauntlet. Level caps and item restrictions.</p>
            </div>
          </Link>

          <Link to="/encounters" className="md:col-span-4 group relative overflow-hidden bg-surface-container-high rounded-xl p-8 flex flex-col md:flex-row justify-between items-center hover:bg-gradient-to-r hover:from-surface-container-high hover:to-primary-container/20 transition-all duration-500 cursor-pointer">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <Map className="text-primary-container" size={40} />
                <h3 className="text-3xl font-black font-headline">Encounters</h3>
              </div>
              <p className="text-on-surface-variant text-base max-w-2xl">Browse encounters by route, including rare static events and hidden grotto spawns updated for the Kaizo Origins patch.</p>
            </div>
            <div className="mt-8 md:mt-0 flex gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center overflow-hidden">
                    <img src={`https://picsum.photos/seed/poke${i}/100/100`} alt="Poke" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="mt-32 px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pb-32">
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-surface-container overflow-hidden p-12">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeCYfgALO3XFF0RW-xAJIzoLj2NW2Kn7nIfVN9hhQeUOyJoXgqbpdMbXC4GXR2YxBCWYA7O6u3ERB2AUKgc6C7NoAnVYXCdoDFUug9SzHCuJIWegAfr5jdaT6NptAIBy9RBQmJZDXJuBUSCJnMmd0Q4Au9Y9MU7yK0e4wYx8C-M4ywtEYEr0ecQbKw4SqVT1FBnlMjM15Lp2Q9O0dXNg1mmXAyV0dLeYkpVcTIhzp-nmKu-4My0xX7JZ5TpTq5JyCjBjpTVOLm4Q"
              alt="Feature"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-surface-container-highest p-6 rounded-2xl shadow-2xl border border-white/5 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black tracking-widest text-primary-container uppercase">Patch Status</p>
                <p className="font-bold text-lg">MODERN META v3.1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-5xl font-black font-headline tracking-tighter uppercase">REDESIGNED <br />ENCOUNTERS.</h2>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed">
            Gone are the days of trivial route traversal. Every trainer has been hand-tuned with competitive movesets, held items, and advanced EV/IV spreads. The Archive provides the intel you need to survive.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <Verified className="text-primary-container shrink-0" size={24} />
              <div>
                <h4 className="font-bold font-headline">Zero Tolerance Balance</h4>
                <p className="text-sm text-on-surface-variant">Every encounter is beatable without RNG, provided you have the right strategy.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <Shield className="text-primary-container shrink-0" size={24} />
              <div>
                <h4 className="font-bold font-headline">Enhanced Quality of Life</h4>
                <p className="text-sm text-on-surface-variant">Instant text, simplified HM usage, and a custom DexNav interface for the ultimate experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
