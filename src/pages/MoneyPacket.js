import { React } from 'react';
import './MoneyPacket.css';
import mpmodel from '../assets/images/MPModel.jpg';
import mp1 from '../assets/images/MP1.jpg';
import mp2 from '../assets/images/MP2.jpg';
import mp3 from '../assets/images/MP3.jpg';
import mp4 from '../assets/images/MP4.jpg';
import mp5 from '../assets/images/MP5.jpg';
import mp6 from '../assets/images/MP6.jpg';
import mp7 from '../assets/images/MP7.jpg';
import mp8 from '../assets/images/MP8.jpg';
import mp9 from '../assets/images/MP9.jpg';
import mp10 from '../assets/images/MP10.jpg';
import mp11 from '../assets/images/MP11.jpg';
import mp12 from '../assets/images/MP12.jpg';
import mp13 from '../assets/images/MP13.jpg';

const MoneyPacket = () => {
  return (
    <div className="container px-6 py-10 mx-auto space-y-6">
      <div className="gallery">
        <div className="gallery__column">
          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mpmodel}
                alt="Portrait by Jessica Felicio"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>

          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp1}
                alt="Portrait by Oladimeji Odunsi"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>

          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp2}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>
        </div>

        <div className="gallery__column">
          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp3}
                alt="Portrait by Noah Buscher"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>

          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp4}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>

          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp5}
                alt="Portrait by Sam Burriss"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>
        </div>

        <div className="gallery__column">
          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp6}
                alt="Portrait by Mari Lezhava"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>

          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp7}
                alt="Portrait by Ethan Haddox"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>

          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp8}
                alt="Portrait by Amir Geshani"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>
        </div>

        <div className="gallery__column">
          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp9}
                alt="Portrait by Guilian Fremaux"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>

          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp10}
                alt="Portrait by Jasmin Chew"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>

          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp11}
                alt="Portrait by Dima DallAcqua"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>

          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp12}
                alt="Portrait by Dima DallAcqua"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>

          <a className="gallery__link cursor-pointer">
            <figure className="gallery__thumb">
              <img
                src={mp13}
                alt="Portrait by Dima DallAcqua"
                className="gallery__image"
              />
              <figcaption className="gallery__caption"></figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoneyPacket;
