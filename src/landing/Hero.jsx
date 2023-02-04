import React from 'react';

export const Hero = () => {
  return (
    <div className="max-w-screen-xl flex flex-col-reverse px-6 pt-6 pb-12 mx-auto lg:h-[32rem] lg:py-16 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg lg:mt-8">
          <h1 className="text-2xl font-medium text-zinc-800 dark:text-zinc-100 lg:text-4xl">
            Print your design with us
          </h1>
          <p className="mt-2 ml-1 text-zinc-700 dark:text-zinc-200">
            We provide quality and affordable printing solutions in Singapore.
          </p>
          <div className="grid gap-6 mt-8 ml-1 sm:grid-cols-2">
            <div className="flex items-center -px-3">
              <svg
                className="fill-zinc-700 dark:fill-zinc-200"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="M14.75 16.35h1.2v-1.5h.7q.45 0 .75-.3t.3-.75v-3.6q0-.45-.3-.75t-.75-.3h-2.6q-.45 0-.75.3t-.3.75v3.6q0 .45.3.75t.75.3h.7Zm-8.45-1.5h1.2v-2h2.3v2H11v-5.7H9.8v2.5H7.5v-2.5H6.3Zm8.05-1.2q-.05 0-.1-.05t-.05-.1v-3q0-.05.05-.1t.1-.05h2q.05 0 .1.05t.05.1v3q0 .05-.05.1t-.1.05ZM4.3 19.5q-.75 0-1.275-.525Q2.5 18.45 2.5 17.7V6.3q0-.75.525-1.275Q3.55 4.5 4.3 4.5h15.4q.75 0 1.275.525.525.525.525 1.275v11.4q0 .75-.525 1.275-.525.525-1.275.525Zm0-1.5h15.4q.1 0 .2-.1t.1-.2V6.3q0-.1-.1-.2t-.2-.1H4.3q-.1 0-.2.1t-.1.2v11.4q0 .1.1.2t.2.1ZM4 18V6v12Z" />
              </svg>

              <span className="ml-4 text-zinc-700 dark:text-zinc-200">High quality printing</span>
            </div>
            <div className="flex items-center -px-3">
              <svg
                className="fill-zinc-700 dark:fill-zinc-200"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M11.425 18.625h1.5v-1h1.25q.325 0 .538-.212.212-.213.212-.538v-3q0-.325-.212-.538-.213-.212-.538-.212h-3.25v-1.5h4v-1.5h-2v-1h-1.5v1h-1.25q-.325 0-.537.212-.213.213-.213.538v3q0 .325.213.537.212.213.537.213h3.25v1.5h-4v1.5h2ZM6.3 21.5q-.75 0-1.275-.525Q4.5 20.45 4.5 19.7V4.3q0-.75.525-1.275Q5.55 2.5 6.3 2.5h7.95l5.25 5.25V19.7q0 .75-.525 1.275-.525.525-1.275.525Zm7.2-13.625V4H6.3q-.1 0-.2.1t-.1.2v15.4q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V7.875ZM6 4v3.875V4 20 4Z"
                />
              </svg>
              <span className="ml-4 text-zinc-700 dark:text-zinc-200">Affordable price tag</span>
            </div>
            <div className="flex items-center -px-3">
              <svg
                className="fill-zinc-700 dark:fill-zinc-200"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="m15.475 16.525 1.05-1.05L12.75 11.7V7h-1.5v5.3ZM12 21.5q-1.975 0-3.712-.75Q6.55 20 5.275 18.725T3.25 15.712Q2.5 13.975 2.5 12t.75-3.713Q4 6.55 5.275 5.275T8.288 3.25Q10.025 2.5 12 2.5t3.713.75q1.737.75 3.012 2.025t2.025 3.012q.75 1.738.75 3.713t-.75 3.712q-.75 1.738-2.025 3.013t-3.012 2.025q-1.738.75-3.713.75Zm0-9.5Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z" />
              </svg>
              <span className="ml-4 text-zinc-700 dark:text-zinc-200">Reasonable delivery time</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mb-8 lg:mb-0 w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full max-w-2xl rounded-md"
          src="https://images.unsplash.com/photo-1599108859519-8ac78fd1b912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="business card"
        />
      </div>
    </div>
  );
};
