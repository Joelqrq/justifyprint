import React, { useEffect, useRef, useState } from 'react';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const Gallery = (props) => {
  const imagesRef = useRef(null);

  const handleImageClick = (index) => {
    const map = getMap();
    const lightbox = new PhotoSwipe({
      dataSource: props.images.map((image, i) => {
        const node = map.get(props.galleryID + '-' + i);

        return {
          src: image.largeURL,
          width: node.naturalWidth,
          height: node.naturalHeight,
        };
      }),
      index: index,
      padding: { top: 60, bottom: 60, left: 10, right: 10 },
      wheelToZoom: true,
      pswpModule: () => import('photoswipe'),
    });
    lightbox.addFilter('thumbEl', (thumbEl, data, i) => {
      const el = map.get(props.galleryID + '-' + i);
      if (el) {
        return el;
      }
      return thumbEl;
    });
    lightbox.init();
  };

  function getMap() {
    if (!imagesRef.current) {
      imagesRef.current = new Map();
    }
    return imagesRef.current;
  }

  return (
    <ResponsiveReactGridLayout
      id={props.galleryID}
      layouts={props.layouts}
      cols={props.cols}
      rowHeight={props.rowHeight}
      isDraggable={false}
      isResizable={false}
    >
      {props.images.map((image, index) => (
        <div key={props.galleryID + '-' + index + '-wrapper'}>
          <div
            className="h-full cursor-pointer transition-transform ease-out hover:scale-105 duration-300"
            key={props.galleryID + '-' + index}
            onClick={() => handleImageClick(index)}
          >
            <img
              ref={(node) => {
                const map = getMap();
                map.set(props.galleryID + '-' + index, node);
              }}
              className="object-fill w-full h-full"
              src={image.thumbnailURL}
              alt={image.alt}
            />
          </div>
        </div>
      ))}
    </ResponsiveReactGridLayout>
  );
};
