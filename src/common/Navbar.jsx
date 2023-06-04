import { React, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Email } from '../icon/Email';
import { Facebook } from '../icon/Facebook';
import { Instagram } from '../icon/Instagram';
import { Whatsapp } from '../icon/Whatsapp';
import { useToggle } from '../hooks/useToggle';
import { Menu } from './Menu';
import { Disclosure } from '@headlessui/react';

export const Navbar = () => {
  const [openState, setOpenState] = useToggle();
  const menuBtnRef = useRef();

  return (
    <div>
      <div className="lg:fixed inset-x-0 z-10 mx-auto px-3 pt-3 w-full max-w-screen-xl lg:flex lg:flex-col">
        <nav className="backdrop-blur rounded-xl lg:rounded-md border border-zinc-900/10 dark:border-zinc-50/[0.06] bg-zinc-50/90 dark:bg-zinc-900/75">
          <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center">
              <div className="flex items-center justify-between">
                <div>
                  <NavLink to="/">
                    <img
                      className="pt-2 h-14 dark:invert"
                      src="https://joelqrq.github.io/justifyprint-pricelist-warehouse/logo/justifyprint.png"
                      alt="homepage"
                    />
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
                      className={
                        'w-6 h-6' + (!openState ? ' hidden' : ' block')
                      }
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

              <div className="hidden lg:flex flex-1 flex-row items-center justify-between w-auto mt-0 p-0">
                <div className="hidden lg:flex flex-row items-center px-16 -mx-4">
                  <button
                    onClick={() => {
                      menuBtnRef.current.toggle();
                    }}
                    className="capitalize mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 text-zinc-800 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-200"
                  >
                    products
                  </button>
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
        </nav>
        <div className="absolute inset-x-0 mt-3 px-3 z-20">
          <div
            className={
              'relative flex lg:hidden flex-col px-3 py-4 backdrop-blur rounded-xl border border-zinc-900/10 dark:border-zinc-50/[0.06] bg-zinc-50 dark:bg-zinc-900/75 transition-all duration-150 ease-in-out' +
              (openState
                ? ' translate-y-0 opacity-100'
                : ' opacity-0 -translate-y-[5%]')
            }
          >
            <div className="flex lg:hidden flex-col">
              <Disclosure>
                <Disclosure.Button className="block p-2 border-b hover:border-zinc-900/10 dark:hover:border-zinc-100/10 hover:bg-zinc-100/20 dark:hover:bg-zinc-800/20 text-center transition-colors duration-[50ms]">
                  <span className="capitalize text-zinc-800 dark:text-zinc-100 font-semibold">
                    products
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col items-center p-2">
                  <ul>
                    <li>
                      <NavLink
                        onClick={setOpenState}
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
                    <li>
                      <NavLink
                        onClick={setOpenState}
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
                </Disclosure.Panel>
              </Disclosure>
            </div>
            <div className="flex justify-center items-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
              <Email></Email>
              <Whatsapp></Whatsapp>
              <Facebook></Facebook>
              <Instagram></Instagram>
            </div>
          </div>
        </div>
        <Menu ref={menuBtnRef}></Menu>
      </div>
    </div>
  );
};
