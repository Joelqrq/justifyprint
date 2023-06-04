import React from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';

export const Menu = ({ openState, onToggle }) => {
  return (
    <Transition
      id="mega-menu-full-dropdown"
      className="hidden lg:block mt-3 w-full z-20 backdrop-blur rounded-md border border-zinc-900/10 dark:border-zinc-50/[0.06] bg-zinc-50/90 dark:bg-zinc-900/75"
      show={openState}
      enter="transition-all duration-150 ease-in-out"
      enterFrom="-translate-y-[5%] opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition-all duration-150 ease-in-out"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="-translate-y-[5%] opacity-0"
    >
      <div className="grid py-5 px-4 mx-auto max-w-screen-xl sm:grid-cols-2 md:grid-cols-3 md:px-6">
        <ul>
          <li>
            <NavLink
              onClick={onToggle}
              to="money-packet"
              className="block p-3 rounded-lg border border-transparent hover:border-zinc-900/10 dark:hover:border-zinc-100/10 hover:bg-zinc-100/20 dark:hover:bg-zinc-800/20 text-center transition-colors duration-[50ms]"
            >
              <p className="capitalize text-zinc-800 dark:text-zinc-100 font-semibold">
                money packet
              </p>
              <span className="text-sm font-light text-zinc-700 dark:text-zinc-200">
                Put your design onto money packet.
              </span>
            </NavLink>
          </li>
        </ul>
        <ul className="hidden md:block">
          <li>
            <NavLink
              onClick={onToggle}
              to="custom-box"
              className="block p-3 rounded-lg border border-transparent hover:border-zinc-900/10 dark:hover:border-zinc-100/10 hover:bg-zinc-100/20 dark:hover:bg-zinc-800/20 text-center transition-colors duration-[50ms]"
            >
              <p className="capitalize text-zinc-800 dark:text-zinc-100 font-semibold">
                custom box
              </p>
              <span className="text-sm font-light text-zinc-700 dark:text-zinc-200">
                Various sizes and material available.
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Transition>
  );
};
