import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { ArrowRight } from "../icon/ArrowRight";
import { ArrowLeft } from "../icon/ArrowLeft";
import ReactPlayer from "react-player";

export const Carousel = forwardRef(
  ({ imageUrls, showThumbnails = true }, ref) => {
    const swiperElRef = useRef(null);
    const thumbsElRef = useRef(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          setTo(index) {
            swiperElRef.current.swiper.slideTo(index, 150, false);
          },
        };
      },
      []
    );

    useEffect(() => {
      if (showThumbnails) {
        const thumbs = thumbsElRef.current;
        const thumbsConfig = {
          slidesPerView: 4,
          spaceBetween: 4,
        };
        Object.assign(thumbs, thumbsConfig);
        thumbs.initialize();
      }

      const swiper = swiperElRef.current;
      const swiperConfig = {
        slidesPerView: 1,
        navigation: {
          nextEl: ".nextArrow > button",
          prevEl: ".prevArrow > button",
        },
        thumbs: {
          swiper: thumbsElRef?.current,
        },
      };

      Object.assign(swiper, swiperConfig);
      swiper.initialize();
    }, []);

    const imageDivs = imageUrls.map((imageUrl, index) => {
      // handle image and video element based on imageUrl
      if (imageUrl.type == "video")
        return (
          <swiper-slide
            class="h-[576px] bg-zinc-900/10"
            key={`carousel-${imageUrl.title === "" ? index : imageUrl.title}`}
          >
            <ReactPlayer className="h-100" url={imageUrl.video} loop config={{ youtube: { playerVars: { autoplay: 1, loop: 1, controls: 0, playsinline: 1 } } }} />
          </swiper-slide>
        );

      return (
        <swiper-slide
          class="h-[576px] bg-zinc-900/10"
          key={`carousel-${imageUrl.title === "" ? index : imageUrl.title}`}
        >
          <img className="object-contain" src={imageUrl.image} />
        </swiper-slide>
      );
    });

    const generateThumbnails = () => {
      if (!showThumbnails) return <></>;

      return (
        <div className="hidden md:block">
          <swiper-container class="flex pt-2" ref={thumbsElRef} init="false">
            {imageUrls.map((imageUrl, index) => {
              return (
                <swiper-slide
                  class="group bg-transparent cursor-pointer"
                  key={`thumbs-${
                    imageUrl.title === "" ? index : imageUrl.title
                  }`}
                >
                  <div className="aspect-square m-auto opacity-40 group-[.swiper-slide-thumb-active]:opacity-100 bg-zinc-900/5 after:relative after:block after:w-full after:h-[0.375rem] after:-bottom-[0.1875rem] after:bg-transparent group-[.swiper-slide-thumb-active]:after:bg-zinc-900 after:transition-colors after:duration-150">
                    <div className="min-h-[68px] min-w-[68px] h-full w-full">
                      <img className="object-contain" src={imageUrl.image} />
                    </div>
                  </div>
                </swiper-slide>
              );
            })}
          </swiper-container>
        </div>
      );
    };

    return (
      <>
        <div className="relative">
          <swiper-container ref={swiperElRef} init="false">
            {imageDivs}
          </swiper-container>
          <div className="prevArrow absolute z-10 top-1/2 left-[4%] -translate-y-1/2 h-10 w-10">
            <ArrowLeft />
          </div>
          <div className="nextArrow absolute z-10 top-1/2 right-[4%] -translate-y-1/2 h-10 w-10">
            <ArrowRight />
          </div>
        </div>
        {generateThumbnails()}
      </>
    );
  }
);
