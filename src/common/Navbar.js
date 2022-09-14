import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Email } from '../icon/Email';
import { Facebook } from '../icon/Facebook';
import { Instagram } from '../icon/Instagram';
import { Whatsapp } from '../icon/Whatsapp';
import { useToggle } from '../hooks/useToggle';
import { Menu } from './Menu';

export const Navbar = () => {
  const [openState, setOpenState] = useToggle();
  const menuBtnRef = useRef();

  return (
    <>
      <nav className="bg-white shadow dark:bg-zinc-800 w-full lg:fixed">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <div>
                <NavLink
                  to="/"
                  className="text-2xl font-bold text-zinc-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-zinc-700 dark:hover:text-zinc-300"
                >
                  Justify Print
                </NavLink>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={setOpenState}
                  type="button"
                  className="stroke-zinc-500 dark:stroke-zinc-200 hover:stroke-zinc-600 dark:hover:stroke-zinc-400 focus:outline-none focus:stroke-zinc-600 dark:focus:stroke-zinc-400"
                  aria-label="toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={'w-6 h-6' + (openState ? ' hidden' : ' block')}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={'w-6 h-6' + (!openState ? ' hidden' : ' block')}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={
                'absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-zinc-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between' +
                (openState
                  ? ' translate-x-0 opacity-100'
                  : ' opacity-0 -translate-x-full')
              }
            >
              <div className="flex flex-col text-zinc-600 dark:text-zinc-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                <a
                  href="https://pricelist.justifyprint.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="capitalize mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-zinc-900 dark:hover:text-zinc-200"
                >
                  pricelist
                </a>
                {/* <button
                  onClick={() => {
                    setOpenState();
                    menuBtnRef.current.toggle();
                  }}
                  className="capitalize mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-zinc-900 dark:hover:text-zinc-200"
                >
                  products
                </button> */}
              </div>

              <div className="flex justify-center items-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                <Email></Email>
                <Whatsapp></Whatsapp>
                <Facebook></Facebook>
                <Instagram></Instagram>
              </div>
            </div>
          </div>
        </div>
        {/* <Menu ref={menuBtnRef}></Menu> */}
      </nav>
    </>
  );
};
