import React from 'react';

export const Hero = () => {
  return (
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center bg-white dark:bg-zinc-900">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-2xl font-medium tracking-wide text-zinc-800 dark:text-white lg:text-4xl">
            Print your design with our services
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            We bring you the cheapest and most affordable printing solutions in
            Singapore.
          </p>
          <div className="grid gap-6 mt-8 sm:grid-cols-2">
            <div className="flex items-center text-zinc-800 -px-3 dark:text-zinc-200">
              <svg
                className="w-5 h-5 mx-3 stroke-zinc-800 dark:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="mx-3">High quality printing</span>
            </div>

            <div className="flex items-center text-zinc-800 -px-3 dark:text-zinc-200">
              <svg
                className="w-5 h-5 mx-3 stroke-zinc-800 dark:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="mx-3">Affordable pricing</span>
            </div>

            <div className="flex items-center text-zinc-800 -px-3 dark:text-zinc-200">
              <svg
                className="w-5 h-5 mx-3 stroke-zinc-800 dark:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="mx-3">Reasonable delivery time</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full max-w-2xl rounded-md"
          src="https://images.unsplash.com/photo-1599108859519-8ac78fd1b912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="business card"
        />
      </div>
    </div>
  );
};
