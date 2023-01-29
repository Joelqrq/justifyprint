import React from 'react';
import { NavLink } from 'react-router-dom';
import { withVisibility } from './withVisibility';

export const Menu = withVisibility((props) => {
  return (
    <div
      id="mega-menu-full-dropdown"
      className={
        'mt-3 w-full z-100 backdrop-blur rounded-md border border-zinc-900/10 dark:border-zinc-50/[0.06] bg-zinc-50/90 dark:bg-zinc-900/75 transition-all duration-150 ease-in-out' +
        (props.visibility ? ' translate-y-0' : ' opacity-0 -translate-y-[5%]')
      }
    >
      <div className="grid py-5 px-4 mx-auto max-w-screen-xl sm:grid-cols-2 md:grid-cols-3 md:px-6">
        <ul aria-labelledby="mega-menu-full-dropdown-button">
          <li>
            <a
              href="https://pricelist.justifyprint.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg border border-transparent hover:border-zinc-900/10 dark:hover:border-zinc-100/10 hover:bg-zinc-100/20 dark:hover:bg-zinc-800/20 text-center transition-colors duration-[50ms]"
            >
              <p className="capitalize text-zinc-800 dark:text-zinc-100 font-semibold">
                pricelist
              </p>
              <span className="text-sm font-light text-zinc-700 dark:text-zinc-200">
                Check out the pricing of other products.
              </span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to="moneypacket"
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
              to="custombox"
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
    </div>
  );
});
