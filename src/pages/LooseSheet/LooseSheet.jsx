import React, { useRef } from "react";
import { Carousel } from "../../templates/Carousel";
import { CarouselSelector } from "../../components/CarouselSelector";
import { finishings } from '../../configs/finishings';

const imagePathPrefix = "/images/loose-sheet/";
const imageUrls = [
  { title: "", image: `${imagePathPrefix}loose-sheet.png` },
  { title: "", image: `${imagePathPrefix}loose-sheet-flyer.png` },
  { title: "", image: `${imagePathPrefix}loose-sheet-menu.png` },
  { title: "", image: `${imagePathPrefix}loose-sheet-invitation-card.png` },
  { title: "", image: `${imagePathPrefix}loose-sheet-greeting-card.png` },
  { title: "", image: `${imagePathPrefix}loose-sheet-post-card.png` },
  { title: "", image: `${imagePathPrefix}loose-sheet-reservation-card.png` },
  { title: "Matte", image: "images/finishings/business-cards-matte.jpg" },
  { title: "Gloss", image: "images/finishings/business-cards-gloss.jpg" },
  { title: "Soft Touch", image: "images/finishings/soft-touch.jpg" },
  { title: "Color Edge", image: "images/finishings/gold-edge-hotstamp-01.jpg" },
  { title: "Spot UV", image: "images/finishings/spot-uv.jpg" },
  { title: "Emboss", image: "images/finishings/emboss.jpg" },
  { title: "Deboss", image: "images/finishings/deboss.jpg" },
  { title: "Hot Stamping", image: "images/finishings/gold-foil.jpg" },
  {
    title: "Scratch Card (Gold / Silver)",
    image: "images/finishings/scratch-card-01.jpeg",
  },
  { title: "Round Corner", image: "images/finishings/round-corner.jpg" },
  { title: "Punch Hole", image: "images/finishings/punch-hole.webp" },
  { title: "Numbering", image: "images/finishings/numbering.jpg" },
  { title: "Custom Die Cut", image: "images/finishings/custom-die-cut.jpg" },
];

const productInfo = {
  title: "Loose Sheet",
  description: `Ever had a large event that you wanted your whole world to know about? Flyers like these loose sheets are one of the easiest ways to get the word out to the people on the street.`,
};

const descriptionList = {
  title: "Customize product to all your needs.",
  list: [
    `Advertising inserts`,
    "Special promotions",
    "Party invitations",
  ],
};

export const LooseSheet = () => {
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

  const finishingEls = finishings.map((finishing, index) => (
    <CarouselSelector
      key={finishing.title}
      title={finishing.title}
      description={finishing.description}
      imageUrl={finishing.imageUrl}
      carousel={carouselRef}
      index={imageUrls.findIndex(i => i.title == finishing.title)}
    />
  ));

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
          <div>
            <h3 className="mb-3 text-lg text-zinc-800 dark:text-zinc-100 font-medium">
              Finishing
            </h3>
            <div className="grid grid-cols-2 gap-2">{finishingEls}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
