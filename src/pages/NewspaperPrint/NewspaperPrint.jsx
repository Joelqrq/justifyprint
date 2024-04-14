import React, { useRef } from "react";
import { Carousel } from "../../templates/Carousel";
import { CarouselSelector } from "../../components/CarouselSelector";
import { finishings } from "../../configs/finishings";

const imagePathPrefix = "/images/newspaper-print/";
const imageUrls = [
  { title: "Newspaper Print Overview", image: `${imagePathPrefix}/newspaper-print-1.jpg` },
  { title: "Newspaper Print All Sides", image: `${imagePathPrefix}/newspaper-print-2.jpg` },
  { title: "Newspaper Print Video", type: "video", image: `${imagePathPrefix}/newspaper-print-3.jpg`, video: `https://youtube.com/shorts/UIpdMFYpkMU`, poster: `${imagePathPrefix}/newspaper-print-3.jpg` },
  { title: "Newspaper Print Closeup", image: `${imagePathPrefix}/newspaper-print-3.jpg` },
  { title: "Newspaper Print Designs", image: `${imagePathPrefix}/newspaper-print-4.jpeg` },
  { title: "Newspaper Print Bouquet", image: `${imagePathPrefix}/newspaper-print-5.jpg` },
];

const productInfo = {
  title: "Newspaper Print",
  description: "Retro and elegant newspaper print for your wedding invitation or flower wrap.",
};

const descriptionList = {
  title: "Customize product to all your needs.",
  list: [
    "Wedding invitation",
    "Flower Wrap",
  ],
};

export const NewspaperPrint = () => {
  const carouselRef = useRef(null);

  const descriptionEls = () => {
    const listEls = descriptionList.list.map((description, index) => (
      <li
        key={`dlist-${index}`}
        className="text-sm text-zinc-700 dark:text-zinc-200"
      >
        {description}
      </li>
    ));

    return (
      <div>
        <h2 className="mb-3 text-lg text-zinc-800 dark:text-zinc-100 font-medium">
          {descriptionList.title}
        </h2>
        <ul className="list-disc list-inside">{listEls}</ul>
      </div>
    );
  };

  return (
    <div className="container px-6 mx-auto max-w-screen-xl">
      {/* Breadcrumb with product name and description */}
      <div className="flex flex-col md:flex-row">
        <div className="min-w-[320px] w-full md:w-5/12 lg:w-1/2 max-w-[576px]">
          <div className="lg:sticky lg:top-[8rem]">
            <Carousel ref={carouselRef} imageUrls={imageUrls} />
            <div className="hidden mt-8 lg:block">
              <p className="font-semibold">Important Notes:</p>
              <ul className="list-disc list-inside">
                <li className="text-sm">
                  Kindly call us or email us if you need other sizes or
                  quantities.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:pl-[3.5vw] w-full md:w-7/12 lg:w-1/2 flex-grow">
          <div className="my-5 lg:my-9">
            <div className="mb-9">
              <h1 className="mb-3 text-3xl text-zinc-800 dark:text-zinc-100 font-semibold">
                {productInfo.title}
              </h1>
              <p className="text-zinc-700 dark:text-zinc-200">
                {productInfo.description}
              </p>
            </div>
            {descriptionEls()}
          </div>
        </div>
      </div>
    </div>
  );
};
