import React from 'react';
import { withVisibility } from './withVisibility';

export const Menu = withVisibility((props) => {
  return (
    <div
      id="mega-menu-full-dropdown"
      className={
        'absolute inset-x-0 mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 transition-all duration-300 ease-in-out' +
        (props.visibility ? ' translate-x-0 opacity-100' : ' opacity-0 -translate-x-full')
      }
    >
      <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
        <ul aria-labelledby="mega-menu-full-dropdown-button">
          <li>
            <a
              href="#"
              className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Online Stores</div>
              <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Segmentation</div>
              <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Marketing CRM</div>
              <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="#"
              className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Online Stores</div>
              <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Segmentation</div>
              <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Marketing CRM</div>
              <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </a>
          </li>
        </ul>
        <ul className="hidden md:block">
          <li>
            <a
              href="#"
              className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Audience Management</div>
              <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Creative Tools</div>
              <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Marketing Automation</div>
              <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                Connect with third-party tools that you're already using.
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});
