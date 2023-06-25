import React from 'react';
import bnc from '@assets/images/clients/bnc.webp';
import oishi from '@assets/images/clients/oishi.svg';
import renci from '@assets/images/clients/renci.png'
import ntu from '@assets/images/clients/ntu.webp';
import nus from '@assets/images/clients/nus.png';

export const ClientTestimony = () => {
  return (
    <div>
      <div className="max-w-screen-xl flex flex-col px-6 dark:px-16 dark:lg:px-6 py-12 mx-auto items-center">
        <span className="block mb-6 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          Our Clients
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 auto-cols-min gap-x-4 gap-y-1 dark:gap-y-4 place-items-center">
          <div className="h-full w-full flex px-4 lg:px-0 dark:lg:px-2 justify-center items-center dark:bg-zinc-50 dark:rounded-xl">
            <img className="h-[10rem] pt-2 object-contain mix-blend-multiply" src={bnc} />
          </div>
          <div className="h-full w-full flex px-8 lg:px-4 -mt-11 dark:mt-0 -mb-3 dark:mb-0 lg:my-0 justify-center items-center dark:bg-zinc-50 dark:rounded-xl">
            <img className="h-[10rem] py-11 object-contain" src={oishi} />
          </div>
          <div className="h-full w-full flex px-6 lg:px-4 dark:lg:px-5 justify-center items-center dark:bg-zinc-50 dark:rounded-xl">
            <img className="h-[10rem] py-10 object-contain" src={ntu} />
          </div>
          <div className="h-full w-full flex px-6 lg:px-4 justify-center items-center dark:bg-zinc-50 dark:rounded-xl">
            <img className="h-[10rem] dark:pt-2 dark:lg:pt-0 pb-8 dark:pb-4 dark:lg:pb-6  object-contain mix-blend-multiply" src={renci} />
          </div>
          <div className="h-full w-full flex px-6 lg:px-4 dark:lg:px-8 justify-center items-center dark:bg-zinc-50 dark:rounded-xl">
            <img className="h-[10rem] py-10 object-contain" src={nus} />
          </div>
        </div>
        </div>
      </div>
  );
};
