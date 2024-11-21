import React from "react";
import { Hero } from "../../landing/Hero";
import { Feature } from "../../landing/Feature";
import { ClientTestimony } from "../../landing/ClientTestimony";
// import { Carousel } from "../../templates/Carousel";

export const Landing = () => {
  // const imagePathPrefix = "/images/desk-calendar/";
  // const imageUrls = [
  //   {
  //     title: "",
  //     image: `${imagePathPrefix}desk-calendar-print-on-stand-mockup.png`,
  //   },
  //   {
  //     title: "",
  //     image: `${imagePathPrefix}desk-calendar-with-hotstamp-mockup.png`,
  //   },
  //   { title: "", image: `${imagePathPrefix}desk-calendar.png` },
  //   { title: "", image: `${imagePathPrefix}desk-calendar-1.png` },
  //   { title: "", image: `${imagePathPrefix}desk-calendar-2.png` },
  // ];
  return (
    <>
      {/* <div className="max-w-screen-xl px-6 mx-auto">
        <Carousel imageUrls={imageUrls} showThumbnails={false} />
      </div> */}
      <Hero />
      <ClientTestimony />
      <Feature />
    </>
  );
};
