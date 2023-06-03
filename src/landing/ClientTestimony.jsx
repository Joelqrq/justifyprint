import React from 'react';
import bnc from '@assets/images/clients/ban-nee-chen.webp';
import oishi from '@assets/images/clients/oishi.svg';
import renci from '@assets/images/clients/renci.png'
import ntu from '@assets/images/clients/ntu.webp';
import nus from '@assets/images/clients/nus.png';

export const ClientTestimony = () => {
  return (
    <div >
      <div className="max-w-screen-xl flex flex-col px-6 py-12 mx-auto items-center">
        <span className="block mb-6 text-2xl font-medium text-zinc-800 dark:text-zinc-100">
          Our Clients
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 auto-cols-min gap-x-4 gap-y-1 place-items-center">
          <img className="h-[10rem] px-12 lg:px-2 py-4 object-contain mix-blend-multiply" src={bnc} />
          <img className="h-[10rem] px-12 lg:px-2 py-10 object-contain object-top mix-blend-multiply" src={oishi} />
          <img className="h-[10rem] px-12 lg:px-2 py-10 object-contain mix-blend-multiply" src={ntu} />
          <img className="h-[10rem] px-12 lg:px-2 pb-8 object-contain mix-blend-multiply" src={renci} />
          <img className="h-[10rem] px-12 lg:px-2 py-10 object-contain mix-blend-multiply" src={nus} />
        </div>
        </div>
      </div>
  );
};
