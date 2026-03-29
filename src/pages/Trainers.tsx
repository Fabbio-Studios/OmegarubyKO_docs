import React from 'react';
import { TrainerBoard } from '../components/TrainerBoard';
import { TRAINER_DATA } from '../data';

export const Trainers = () => {
  const gymLeaders = TRAINER_DATA.filter((trainer) => trainer.category === 'gym');

  return (
    <TrainerBoard
      title="Gym Leaders"
      subtitle="Challenge"
      trainers={gymLeaders}
    />
  );
};
