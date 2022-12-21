import React from 'react';
import mainImage from '@assets/images/box-customization/main.png';
import boxSizeImage from '@assets/images/box-customization/box-sizes.jpg';
import boxColorImage from '@assets/images/box-customization/box-colors.jpg';
import customLogoImage from '@assets/images/box-customization/custom-logo.jpg';
import customInsertImage from '@assets/images/box-customization/custom-insert.jpg';
import customSleeveImage from '@assets/images/box-customization/custom-sleeve.jpg';
import paperFillersImage from '@assets/images/box-customization/paper-fillers.jpg';
import mailingCartonImage from '@assets/images/box-customization/mailing-carton.jpg';
import paperGiftBagsImage from '@assets/images/box-customization/paper-gift-bags.jpg';

export const BoxCustomization = () => {
  return (
    <div className="pt-12 flex flex-col items-center">
      <div className="py-6 flex flex-col items-center">
        <span className="text-2xl tracking-wide text-zinc-800 dark:text-zinc-200">Box Customization</span>
        <img className="mt-6 h-[400px]" src={mainImage} />
      </div>
      <div className="flex flex-col items-center divide-y divide-solid divide-zinc-200 dark:divide-zinc-700">
        <div className="py-6 flex flex-col items-center">
          <span className="text-xl tracking-wide text-zinc-800 dark:text-zinc-200">Box Sizes</span>
          <div className="flex flex-row m-8">
            <div>
              <img className="h-[32rem]" src={boxSizeImage} />
            </div>
            <div className="ml-8 w-[64ch]">
              <p className="break-words tracking-wide text-zinc-800 dark:text-zinc-200">
                Choose from 34 different sizes of gift boxes, from 12 * 9 *
                2.5cm | 4.72 * 3.54 * 0.98in (small shallow size, the smallest)
                to 70 * 50 * 20cm | 27.56 * 19.7 * 7.87in (XXXL size, the
                largest). If you don't find the size you need, you can also
                request a custom quote.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col items-center">
          <span className="text-xl tracking-wide text-zinc-800 dark:text-zinc-200">Box Colors</span>
          <div className="flex flex-row m-6">
            <div className="mr-8 w-[64ch]">
              <p className="break-words tracking-wide text-zinc-800 dark:text-zinc-200">
                18 different box colors (different sizes of boxes may vary).
                Here are all 18 colors: white, matte black, pink, kraft, navy
                blue, red, ivory, baby blue, silver, rose gold, yellow, grey,
                holographic, copper, marble, orange, glossy black, green.
              </p>
            </div>
            <div>
              <img className="h-[32rem]" src={boxColorImage} />
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col items-center">
          <span className="text-xl tracking-wide text-zinc-800 dark:text-zinc-200">Custom Logo</span>
          <div className="flex flex-row m-6">
            <div>
              <img className="h-[32rem]" src={customLogoImage} />
            </div>
            <div className="ml-8 w-[64ch]">
              <p className="break-words tracking-wide text-zinc-800 dark:text-zinc-200">
                Customize your logo & printing at an affordable price. Lots of
                customization options, now there are 5 customization options you
                can place order online, debossing, foil stamping (one color),
                screen printing (one color), digital printing (multi-color),
                transparent window (PET sheet). Contact us for more details.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col items-center">
          <span className="text-xl tracking-wide text-zinc-800 dark:text-zinc-200">Custom Insert</span>
          <div className="flex flex-row m-6">
            <div className="mr-8 w-[64ch]">
              <p className="break-words tracking-wide text-zinc-800 dark:text-zinc-200">
                Custom inserts include paper insert, wrapping paper, cloth
                lining, PET tray, EVA & sponge tray, cloth bag, etc.
              </p>
            </div>
            <div>
              <img className="h-[32rem]" src={customInsertImage} />
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col items-center">
          <span className="text-xl tracking-wide text-zinc-800 dark:text-zinc-200">Custom Sleeve</span>
          <div className="flex flex-row m-6">
            <div>
              <img className="h-[32rem]" src={customSleeveImage} />
            </div>
            <div className="ml-8 w-[64ch]">
              <p className="break-words tracking-wide text-zinc-800 dark:text-zinc-200">
                Sleeves are also available for customization. There are no
                products online for sleeves, but you can contact us for details
                if you need sleeves.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col items-center">
          <span className="text-xl tracking-wide text-zinc-800 dark:text-zinc-200">Paper Filler & Shred</span>
          <div className="flex flex-row m-6">
            <div className="mr-8 w-[64ch]">
              <p className="break-words tracking-wide text-zinc-800 dark:text-zinc-200">
                12 color options are available, contact us for more details.
              </p>
            </div>
            <div>
              <img className="h-[32rem]" src={paperFillersImage} />
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col items-center">
          <span className="text-xl tracking-wide text-zinc-800 dark:text-zinc-200">Mailing Carton</span>
          <div className="flex flex-row m-6">
            <div>
              <img className="h-[32rem]" src={mailingCartonImage} />
            </div>
            <div className="ml-8 w-[64ch]">
              <p className="break-words tracking-wide text-zinc-800 dark:text-zinc-200">
                Different sizes of mailing cartons to fit different sizes of
                gift boxes. Choose deluxe mailing cartons or regular mailing
                cartons, contact us for more details.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col items-center">
          <span className="text-xl tracking-wide text-zinc-800 dark:text-zinc-200">Gift Bags</span>
          <div className="flex flex-row m-6">
            <div className="mr-8 w-[64ch]">
              <p className="break-words tracking-wide text-zinc-800 dark:text-zinc-200">
                A5, A4, A3 sizes of paper gift bags with white, black, and kraft
                color. Contact us for more details.
              </p>
            </div>
            <div>
              <img className="h-[32rem]" src={paperGiftBagsImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
