import React from "react";
import { NavLink } from "react-router-dom";
import { Email } from "../icon/Email";
import { Facebook } from "../icon/Facebook";
import { Instagram } from "../icon/Instagram";
import { Whatsapp } from "../icon/Whatsapp";
import { products } from "../configs/products";

export const Footer = () => {
  const footerLinks = products.map((product) => (
    <FooterNavLink
      key={`footer${product.title}`}
      content={product.title}
      link={product.path}
    />
  ));

  return (
    <footer>
      <div className="max-w-screen-xl px-6 pt-8 pb-14 mx-auto">
        <hr className="mb-16 border-zinc-200 dark:border-zinc-700" />
        <div className="flex flex-col gap-y-16 lg:flex-row">
          <div className="mr-20 max-w-[28ch] lg:max-w-[32ch]">
            <div>
              <NavLink to="/">
                <img
                  className="block h-full max-h-10 dark:invert"
                  src="/logo.png"
                  alt="homepage"
                />
              </NavLink>
              <span className="block mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                We bring you the cheapest and most affordable printing solutions
                in Singapore.
              </span>
            </div>
            <div className="flex items-center mt-3 -mx-[0.6rem]">
              <Email></Email>
              <Whatsapp></Whatsapp>
              <Facebook></Facebook>
              <Instagram></Instagram>
            </div>
          </div>
          <div className="flex-grow">
            <FooterCategory content="product" />
            <div className="grid gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
              {footerLinks}
            </div>
            <div className="mt-14 sm:flex sm:items-center sm:justify-between">
              <p className="text-sm text-zinc-700 dark:text-zinc-200">
                © {new Date().getFullYear()} Justify Print
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterCategory = ({ content }) => {
  return (
    <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-100 uppercase">
      {content}
    </div>
  );
};

const FooterLink = ({ content, link }) => {
  return (
    <a
      href={link}
      className="block mt-3 text-sm font-medium text-zinc-700 duration-150 dark:text-zinc-200 hover:text-zinc-400 capitalize"
    >
      {content}
    </a>
  );
};

const FooterNavLink = ({ content, link }) => {
  return (
    <NavLink
      to={link}
      className="block mt-3 text-sm font-medium text-zinc-700 duration-150 dark:text-zinc-200 hover:text-zinc-400 capitalize"
    >
      {content}
    </NavLink>
  );
};
