import React from 'react';
import { Email } from '../icon/Email';
import { Facebook } from '../icon/Facebook';
import { Instagram } from '../icon/Instagram';
import { Whatsapp } from '../icon/Whatsapp';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900">
      <div className="container px-6 pb-8 pt-16 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <FooterCategory content="product" />
            <FooterLink content="business card" link="/business-card" />
            <FooterLink content="business card" link="/business-card" />
            <FooterLink content="business card" link="/business-card" />
            <FooterLink content="business card" link="/business-card" />
            <FooterLink content="business card" link="/business-card" />
          </div>

          <div>
            <FooterCategory content="support" />
            <FooterLink content="FAQ" link="/faq" />
            <FooterLink
              content="contact justifyPrint"
              link="mailto:justifyprint@gmail.com"
            />
          </div>

          <div>
            <FooterCategory content="company" />
            <div>
              <span className="block mt-3 text-md font-medium text-zinc-500 duration-700 dark:text-zinc-300">
                Justify Print
              </span>
              <span className="block mt-1 text-sm font-medium text-zinc-500 duration-700 dark:text-zinc-300">
                We brings you the cheapest and most affordable printing
                solutions in Singapore.
              </span>
            </div>
          </div>
        </div>
        <hr className="my-10 border-zinc-200 dark:border-zinc-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">
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
    <div className="text-xs font-medium text-zinc-400 uppercase">{content}</div>
  );
};

const FooterLink = ({ content, link }) => {
  return (
    <a
      href={link}
      className="block mt-3 text-sm font-medium text-zinc-500 duration-700 dark:text-zinc-300 hover:text-zinc-400 dark:hover:text-zinc-200 hover:underline capitalize"
    >
      {content}
    </a>
  );
};
