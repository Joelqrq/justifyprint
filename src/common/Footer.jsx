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
      <div className="max-w-screen-xl px-6 py-8 mx-auto">
        <hr className="my-10 border-zinc-200 dark:border-zinc-700" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div></div>
          <div>
            <FooterCategory content="product" />
            {footerLinks}
          </div>

          {/* <div>
            <FooterCategory content="support" />
            <FooterLink content="FAQ" link="/faq" />
            <FooterLink
              content="contact justifyPrint"
              link="mailto:justifyprint@gmail.com"
            />
          </div> */}

          <div>
            <FooterCategory content="company" />
            <div>
              <span className="block mt-3 text-md font-medium text-zinc-700 dark:text-zinc-200">
                Justify Print
              </span>
              <span className="block mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                We bring you the cheapest and most affordable printing solutions
                in Singapore.
              </span>
            </div>
            <div>
              <span className="block mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                Contact: +65 9227 5169
              </span>
              <span className="block mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                Email:&nbsp;
                <a
                  href="mailto:justifyprint@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-zinc-400"
                >
                  justifyprint@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <hr className="mt-10 mb-4 border-zinc-200 dark:border-zinc-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            © {new Date().getFullYear()} Justify Print
          </p>

          <div className="flex items-center mt-3 -mx-2 sm:mt-0">
            <Email></Email>
            <Whatsapp></Whatsapp>
            <Facebook></Facebook>
            <Instagram></Instagram>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterCategory = ({ content }) => {
  return (
    <div className="text-xs font-medium text-zinc-800 dark:text-zinc-100 uppercase">
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
