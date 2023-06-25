import React from 'react';
import { NavLink } from 'react-router-dom';

export const Link = ({ to, title, description, handleClick }) => {
  return (
    <NavLink
      onClick={handleClick}
      to={to}
      className="block p-3 rounded-lg border border-transparent hover:border-zinc-900/10 dark:hover:border-zinc-100/10 hover:bg-zinc-100/20 dark:hover:bg-zinc-800/20 text-center transition-colors duration-[50ms]"
    >
      <p className="capitalize text-sm text-zinc-800 dark:text-zinc-100 font-medium">
        {title}
      </p>
      <span className="text-sm font-light text-zinc-700 dark:text-zinc-200">
        {description}
      </span>
    </NavLink>
  );
};
