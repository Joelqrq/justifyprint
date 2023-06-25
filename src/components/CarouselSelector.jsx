import React from "react";

export const CarouselSelector = ({
  title,
  description,
  imageUrl,
  carousel,
  index,
}) => {
  function setTo() {
    carousel.current.setTo(index);
  }

  return (
    <button
      onClick={setTo}
      className="flex p-[1.125rem] text-start bg-zinc-50/20 dark:bg-zinc-700/20 hover:bg-zinc-50/80 dark:hover:bg-zinc-700/80 active:bg-zinc-100/20 dark:active:bg-zinc-800/80 border border-zinc-900/20 rounded-md transition-colors duration-[50ms]"
    >
      <div className="flex flex-col h-full w-full">
        <div className="mb-3 max-h-20 md:max-h-28 flex-grow">
          <img
            className="h-full w-full object-cover"
            src={imageUrl ?? "images/common/loading.jpg"}
          />
        </div>
        <div>
          <h4 className="text-zinc-800 dark:text-zinc-100 font-medium">
            {title}
          </h4>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};
