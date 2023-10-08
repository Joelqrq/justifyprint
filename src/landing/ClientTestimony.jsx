import React from 'react';

export const ClientTestimony = () => {
  return (
    <div>
      <div className="max-w-screen-xl flex flex-col px-6 dark:px-16 dark:lg:px-6 py-12 mx-auto items-center">
        <span className="block mb-3 dark:mb-6 text-xl font-semibold text-zinc-800 dark:text-zinc-100 text-center md:text-start">
          Companies to individuals we worked with
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 auto-cols-min gap-x-4 gap-y-1 dark:gap-y-4 place-items-center">
          <div className="h-full w-full flex px-2 lg:px-0 dark:lg:px-2 justify-center items-center dark:bg-zinc-50 dark:rounded">
            <img className="h-28 pt-1 object-contain mix-blend-multiply" src="/images/clients-logo/bnc.webp" title="bnc logo" />
          </div>
          <div className="h-full w-full flex px-4 lg:px-4 -mt-6 dark:mt-0 -mb-3 dark:mb-0 lg:my-0 justify-center items-center dark:bg-zinc-50 dark:rounded">
            <img className="h-28 py-6 object-contain" src="/images/clients-logo/oishi.svg" title="oishi logo" />
          </div>
          <div className="h-full w-full flex px-3 lg:px-4 dark:lg:px-5 justify-center items-center dark:bg-zinc-50 dark:rounded">
            <img className="h-28 py-5 object-contain" src="/images/clients-logo/ntu.webp" title="ntu logo" />
          </div>
          <div className="h-full w-full flex px-3 lg:px-4 justify-center items-center dark:bg-zinc-50 dark:rounded">
            <img className="h-28 dark:pt-2 dark:lg:pt-0 pb-4 dark:pb-2 dark:lg:pb-3  object-contain mix-blend-multiply" src="/images/clients-logo/renci.png" title="renci logo" />
          </div>
          <div className="h-full w-full flex px-3 lg:px-4 dark:lg:px-8 justify-center items-center dark:bg-zinc-50 dark:rounded">
            <img className="h-28 py-5 object-contain" src="/images/clients-logo/nus.png" title="nus logo" />
          </div>
          <div className="h-full w-full flex px-3 lg:px-4 dark:lg:px-8 justify-center items-center dark:bg-zinc-50 dark:rounded">
            <img className="h-28 py-5 object-contain mix-blend-multiply" src="/images/clients-logo/mindef.png" title="mindef logo" />
          </div>
        </div>
        </div>
      </div>
  );
};
