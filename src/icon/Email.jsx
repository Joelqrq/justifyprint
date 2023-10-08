import React from "react";

export const Email = () => {
  return (
    <a
      className="mx-2"
      href="mailto:justifyprint@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      title="justifyprint email"
    >
      <svg
        className="h-6 stroke-zinc-800 dark:stroke-zinc-100 transition-colors duration-300 hover:stroke-zinc-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    </a>
  );
};
