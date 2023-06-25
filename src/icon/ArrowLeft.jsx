import React from "react";

export const ArrowLeft = () => {
  return (
    <button className="inline-flex justify-center items-center h-full w-full fill-zinc-50 hover:fill-zinc-900 active:fill-zinc-50 disabled:fill-zinc-50/20 bg-zinc-900/[0.15] hover:bg-zinc-50/80 active:bg-zinc-50/20 disabled:bg-zinc-900/5 border-[0.0625rem] border-solid border-zinc-50/50 hover:border-transparent active:border-zinc-50/25 disabled:border-transparent rounded-[6.25rem] transition-colors duration-[50ms]">
      <svg className="w-[1.375rem] h-[1.375rem] opacity-70" viewBox="0 0 48 48">
        <path d="M28.654 9.57L14.224 24l14.43 14.429 2.121-2.121L18.467 24l12.308-12.309-2.121-2.121z"></path>
      </svg>
    </button>
  );
};
