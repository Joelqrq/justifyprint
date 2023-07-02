import { React, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Email } from "../icon/Email";
import { Facebook } from "../icon/Facebook";
import { Instagram } from "../icon/Instagram";
import { Whatsapp } from "../icon/Whatsapp";
import { useToggle } from "../hooks/useToggle";
import { Menu } from "./Menu";
import { Disclosure, Transition } from "@headlessui/react";
import { Link } from "../components/Link";
import { products } from "../configs/products";

export const Navbar = () => {
  const [openState, setOpenState] = useToggle();
  const menuBtnRef = useRef();
  const productLinks = products.map((product) => (
    <li key={`mnav-${product.title}`}>
      <Link
        to={product.path.substring(1)}
        title={product.title}
        handleClick={setOpenState}
      />
    </li>
  ));

  return (
    <div>
      <div className="lg:fixed inset-x-0 z-[100] mx-auto px-3 lg:px-0 pt-3 w-full max-w-screen-xl lg:flex lg:flex-col">
        <nav className="backdrop-blur rounded-xl lg:rounded-md border border-zinc-900/10 dark:border-zinc-50/[0.06] bg-zinc-50/90 dark:bg-zinc-900/75">
          <div className="container px-4 lg:px-6 py-3 lg:py-4 mx-auto">
            <div className="lg:flex lg:items-center">
              <div className="flex items-center justify-between">
                <div>
                  <NavLink to="/">
                    <img
                      className="pt-[0.15rem] h-full max-h-8 lg:max-h-10 dark:invert"
                      src="/logo.png"
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
                      className={"w-6 h-6" + (openState ? " hidden" : " block")}
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
                        "w-6 h-6" + (!openState ? " hidden" : " block")
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
                    onClick={setOpenState}
                    className="capitalize mt-2 font-medium transition-colors duration-300 transform lg:mt-0 lg:mx-4 text-zinc-800 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-200"
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
        <div className="absolute inset-x-0 mt-3 px-3 z-[200]">
          <Transition
            className="relative flex lg:hidden flex-col px-3 py-4 backdrop-blur rounded-xl border border-zinc-900/10 dark:border-zinc-50/[0.06] bg-zinc-50 dark:bg-zinc-900/75"
            show={openState}
            enter="transition-all duration-150 ease-in-out"
            enterFrom="-translate-y-[5%] opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition-all duration-150 ease-in-out"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="-translate-y-[5%] opacity-0"
          >
            <div className="flex lg:hidden flex-col">
              <Disclosure>
                <Disclosure.Button className="block p-2 border-b hover:border-zinc-900/10 dark:hover:border-zinc-100/10 hover:bg-zinc-100/20 dark:hover:bg-zinc-800/20 text-center transition-colors duration-[50ms]">
                  <span className="capitalize text-zinc-800 dark:text-zinc-100 font-medium">
                    products
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col items-center p-2">
                  <ul className="w-full">
                    {productLinks}
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
          </Transition>
        </div>
        <Menu openState={openState} onToggle={setOpenState}></Menu>
      </div>
    </div>
  );
};
