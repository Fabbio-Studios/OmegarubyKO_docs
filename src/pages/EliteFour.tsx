import React from 'react';
import { TrainerBoard } from '../components/TrainerBoard';
import { TRAINER_DATA } from '../data';

export const EliteFour = () => {
  const eliteFour = TRAINER_DATA.filter((trainer) => trainer.category === 'elite');
  const champion = TRAINER_DATA.find((trainer) => trainer.category === 'champion') || null;

  return (
    <TrainerBoard
      title="Elite Four"
      subtitle="Challenge"
      trainers={eliteFour}
      championTrainer={champion}
    />
  );
};
