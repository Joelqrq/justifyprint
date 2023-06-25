import React from 'react';
import { Hero } from '../../landing/Hero';
import { Feature } from '../../landing/Feature';
import { ClientTestimony } from '../../landing/ClientTestimony';
import { BusinessCard } from '../BusinessCard/BusinessCard';

export const Landing = () => {
  return (
    <>
      <Hero/>
      <Feature/>
      <ClientTestimony />
    </>
  );
};
