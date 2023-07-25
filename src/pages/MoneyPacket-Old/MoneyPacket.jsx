import { React } from 'react';
import { Gallery } from '@common/Gallery';
import mpmodel from '@assets/images/moneypacket/MPModel.jpg';
import mp1 from '@assets/images/moneypacket/MP1.jpg';
import mp2 from '@assets/images/moneypacket/MP2.jpg';
import mp3 from '@assets/images/moneypacket/MP3.jpg';
import mp4 from '@assets/images/moneypacket/MP4.jpg';
import mp5 from '@assets/images/moneypacket/MP5.jpg';
import mp6 from '@assets/images/moneypacket/MP6.jpg';
import mp7 from '@assets/images/moneypacket/MP7.jpg';
import mp8 from '@assets/images/moneypacket/MP8.jpg';
import mp9 from '@assets/images/moneypacket/MP9.jpg';
import mp10 from '@assets/images/moneypacket/MP10.jpg';
import mp11 from '@assets/images/moneypacket/MP11.jpg';
import mp12 from '@assets/images/moneypacket/MP12.jpg';
import mp13 from '@assets/images/moneypacket/MP13.jpg';

const galleryID = 'bc-gallery-1';
const MoneyPacket = () => {
  return (
    <>
      <div className="container px-6 mx-auto">
        <span className="block mx-auto mb-4 max-w-fit text-2xl text-zinc-800 dark:text-zinc-200 tracking-wide">
          Money Packet
        </span>
        <Gallery
          galleryID={galleryID}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 10, sm: 10, xs: 4, xxs: 2 }}
          rowHeight={30}
          images={[
            {
              largeURL: mp1,
              thumbnailURL: mp1,
            },
            {
              largeURL: mp2,
              thumbnailURL: mp2,
            },
            {
              largeURL: mp3,
              thumbnailURL: mp3,
            },
            {
              largeURL: mp4,
              thumbnailURL: mp4,
            },
            {
              largeURL: mp5,
              thumbnailURL: mp5,
            },
            {
              largeURL: mp6,
              thumbnailURL: mp6,
            },
            {
              largeURL: mp7,
              thumbnailURL: mp7,
            },
            {
              largeURL: mp8,
              thumbnailURL: mp8,
            },
            {
              largeURL: mp9,
              thumbnailURL: mp9,
            },
            {
              largeURL: mp10,
              thumbnailURL: mp10,
            },
            {
              largeURL: mp11,
              thumbnailURL: mp11,
            },
            {
              largeURL: mp12,
              thumbnailURL: mp12,
            },
            {
              largeURL: mp13,
              thumbnailURL: mp13,
            },
            {
              largeURL: mpmodel,
              thumbnailURL: mpmodel,
            },
          ]}
          layouts={{
            lg: [
              { x: 0, y: 0, w: 2, h: 6, i: galleryID + '-' + 0 + '-wrapper' },
              { x: 0, y: 3, w: 2, h: 6, i: galleryID + '-' + 1 + '-wrapper' },
              { x: 0, y: 8, w: 2, h: 6, i: galleryID + '-' + 3 + '-wrapper' },
              { x: 0, y: 11, w: 2, h: 6, i: galleryID + '-' + 4 + '-wrapper' },
              { x: 2, y: 0, w: 2, h: 10, i: galleryID + '-' + 2 + '-wrapper' },
              { x: 2, y: 10, w: 2, h: 6, i: galleryID + '-' + 9 + '-wrapper' },
              { x: 2, y: 16, w: 2, h: 6, i: galleryID + '-' + 6 + '-wrapper' },
              { x: 4, y: 0, w: 2, h: 6, i: galleryID + '-' + 7 + '-wrapper' },
              { x: 4, y: 3, w: 2, h: 6, i: galleryID + '-' + 11 + '-wrapper' },
              { x: 4, y: 6, w: 2, h: 10, i: galleryID + '-' + 5 + '-wrapper' },
              { x: 6, y: 0, w: 2, h: 6, i: galleryID + '-' + 10 + '-wrapper' },
              { x: 6, y: 2, w: 2, h: 10, i: galleryID + '-' + 8 + '-wrapper' },
              { x: 6, y: 9, w: 2, h: 6, i: galleryID + '-' + 12 + '-wrapper' },
              { x: 8, y: 0, w: 2, h: 18, i: galleryID + '-' + 13 + '-wrapper' },
            ],
            xs: [
              { x: 0, y: 0, w: 2, h: 6, i: galleryID + '-' + 0 + '-wrapper' },
              { x: 0, y: 3, w: 2, h: 6, i: galleryID + '-' + 1 + '-wrapper' },
              { x: 0, y: 8, w: 2, h: 6, i: galleryID + '-' + 3 + '-wrapper' },
              { x: 0, y: 11, w: 2, h: 6, i: galleryID + '-' + 4 + '-wrapper' },
              { x: 2, y: 0, w: 2, h: 10, i: galleryID + '-' + 2 + '-wrapper' },
              { x: 2, y: 10, w: 2, h: 6, i: galleryID + '-' + 9 + '-wrapper' },
              { x: 2, y: 16, w: 2, h: 6, i: galleryID + '-' + 6 + '-wrapper' },
              { x: 0, y: 0, w: 2, h: 6, i: galleryID + '-' + 7 + '-wrapper' },
              { x: 0, y: 3, w: 2, h: 6, i: galleryID + '-' + 11 + '-wrapper' },
              { x: 0, y: 6, w: 2, h: 10, i: galleryID + '-' + 5 + '-wrapper' },
              { x: 2, y: 0, w: 2, h: 6, i: galleryID + '-' + 10 + '-wrapper' },
              { x: 2, y: 2, w: 2, h: 10, i: galleryID + '-' + 8 + '-wrapper' },
              { x: 0, y: 9, w: 2, h: 6, i: galleryID + '-' + 12 + '-wrapper' },
              { x: 2, y: 0, w: 2, h: 18, i: galleryID + '-' + 13 + '-wrapper' },
            ],
          }}
        ></Gallery>
      </div>
    </>
  );
};

export default MoneyPacket;
