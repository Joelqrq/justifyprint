import { React, useState, useCallback } from 'react';
import './MoneyPacket.css';

import Gallery from 'react-photo-gallery';
import { photos, pictureLinks } from './pictures.js';
// import Lightbox from 'react-images';

const MoneyPacket = () => {
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event) => {
  //   setPhotoIndex(0);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setPhotoIndex(0);
  //   setViewerIsOpen(false);
  // };

  // const goToPrev = () => {
  //   setPhotoIndex((photoIndex) => photoIndex - 1);
  // };
  // const goToNext = () => {
  //   setPhotoIndex((photoIndex) => photoIndex + 1);
  // };

  return (
    <div className="container px-6 py-10 mx-auto space-y-6">
      <Gallery photos={photos} />
      {/* <Lightbox
        images={photos}
        onClose={closeLightbox}
        onClickPrev={goToPrev}
        onClickNext={goToNext}
        currentImage={0}
        isOpen={viewerIsOpen}
      /> */}
    </div>
  );
};

export default MoneyPacket;
