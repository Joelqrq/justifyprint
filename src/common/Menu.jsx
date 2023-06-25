import React from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { products } from "../configs/products";
import { ArrowRight } from "../icon/ArrowRight";

export const Menu = ({ openState, onToggle }) => {
  const linkEls = products.map((product) => (
    <NavLink
      key={product.title}
      onClick={onToggle}
      to={product.path.substring(1)}
      className="block p-3 min-w-[15rem] rounded-lg border border-transparent hover:border-zinc-900/10 dark:hover:border-zinc-100/10 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-[50ms]"
    >
      <p className="capitalize text-sm text-zinc-800 dark:text-zinc-100 font-medium">
        {product.title}
      </p>
    </NavLink>
  ));

  return (
    <Transition
      id="mega-menu-full-dropdown"
      className="hidden lg:block mt-3 min-h-[24rem] w-full z-[200] backdrop-blur rounded-md border border-zinc-900/10 dark:border-zinc-50/[0.06] bg-zinc-50/90 dark:bg-zinc-900/75"
      show={openState}
      enter="transition-all duration-150 ease-in-out"
      enterFrom="-translate-y-[5%] opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition-all duration-150 ease-in-out"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="-translate-y-[5%] opacity-0"
    >
      <div className="flex flex-wrap py-5 px-6 mx-auto max-w-screen-xl">
        {linkEls}
      </div>
    </Transition>
  );
};
