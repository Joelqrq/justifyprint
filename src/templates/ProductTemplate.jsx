import React from 'react';
import { Carousel } from './Carousel';

export const ProductTemplate = ({ data }) => {
  return (
    <>
      {/* Breadcrumb with product name and description */}
      <div className="flex flex-col lg:flex-row">
        <Carousel folder={data.carouselFolder} />
        <div className="">
          <div>
            <p>{data.title}</p>
            <span>{data.price}</span>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
