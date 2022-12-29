import React from "react";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';


const Blocks = () => {
  const { t } = useTranslation();

  const lang = i18n.language


  return (
    <>
      <div className="container px-4 lg:px-16 mx-auto w-[100%] h-full flex-wrap md:flex sm:flex lg:flex justify-center items-center lg:my-8 gap-8">
        <div className="relative w-[100%] lg:w-[45%] xl:w-[22%] md:w-[45%] sm:w-[45%] lg:h-[650px] h-[570px] shadow-lg cursor-pointer lg:hover:scale-[1.01] transition-all  xl:rounded-tl-[25%] md:rounded-tl-[25%] rounded-tl-[25%] rounded-tr-[25%] lg:rounded-[25px] md:rounded-[25px] sm:rounded-[25px] flex-column items-center justify-center bg-white p-8 text-center">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center after:content-[*] h-[170px] w-[170px] rounded-full  bg-gradient-to-r from-[#000048b3] to-[#711dfb] bg-bigger animate-wiggle">
              <div className=" h-[150px] w-[150px] bg-[#e0e8ef] rounded-full flex items-center justify-center">
                <svg
                  className=" my-12 z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  viewBox="0 0 512 512"
                >
                  <g fill="#711dfb">
                    <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-2xl my-8 w-full text-[#711dfb]">
            {t("block1h")}
          </h1>
          <p className="sm:text-sm">{t("block1p")}</p>
        </div>

        <div className="relative w-[100%] lg:w-[45%] xl:w-[22%] md:w-[45%] sm:w-[45%] lg:h-[650px] h-[570px] shadow-lg cursor-pointer lg:hover:scale-[1.01] transition-all  xl:rounded-br-[25%] md:rounded-tr-[25%] lg:rounded-[25px] md:rounded-[25px] sm:rounded-[25px] flex-column items-center justify-center bg-white p-8 text-center">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center after:content-[*]   h-[170px] w-[170px] rounded-full  bg-gradient-to-r from-[#33346d] to-[#b68efe] bg-bigger animate-wiggle">
              <div className=" h-[150px] w-[150px] bg-[#e0e8ef] rounded-full flex items-center justify-center">
                <svg
                  className="my-12 z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  viewBox="0 0 384 512"
                >
                  <g fill="#b68efe">
                    <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-2xl my-8 w-full text-[#b68efe]">
            {t("block2h")}
          </h1>
          <p className="sm:text-sm">{t("block2p")}</p>
        </div>

        <div className="relative w-[100%] lg:w-[45%] xl:w-[22%] md:w-[45%] sm:w-[45%] lg:h-[650px] h-[570px] shadow-lg cursor-pointer lg:hover:scale-[1.01] transition-all  xl:rounded-bl-[25%] md:rounded-bl-[25%] lg:rounded-[25px] md:rounded-[25px] sm:rounded-[25px] flex-column items-center justify-center bg-white p-8 text-center">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center after:content-[*]   h-[170px] w-[170px] rounded-full  bg-gradient-to-r from-[#28154d99] to-[#0089c7] bg-bigger animate-wiggle">
              <div className=" h-[150px] w-[150px] bg-[#e0e8ef] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={60}
                >
                  <g fill="#0089c7">
                    <path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-2xl my-8 w-full text-[#0089c7]">
            {t("block3h")}
          </h1>
          <p className="sm:text-sm">{t("block3p")}</p>
        </div>

        <div className="relative w-[100%] lg:w-[45%] xl:w-[22%] md:w-[45%] sm:w-[45%] lg:h-[650px] h-[570px] shadow-lg cursor-pointer lg:hover:scale-[1.01] transition-all  xl:rounded-tr-[25%] md:rounded-br-[25%] rounded-bl-[25%] rounded-br-[25%] lg:rounded-[25px] md:rounded-[25px] sm:rounded-[25px] flex-column items-center justify-center bg-white p-8 text-center">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center after:content-[*]   h-[170px] w-[170px] rounded-full  bg-gradient-to-r from-[#544471] to-[#7fc4e3] bg-bigger animate-wiggle">
              <div className=" h-[150px] w-[150px] bg-[#e0e8ef] rounded-full flex items-center justify-center">
                <svg
                  width={60}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g fill="#7fc4e3">
                    <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-2xl my-8 w-full text-[#7fc4e3]">
            {t("block4h")}
          </h1>
          <p className={lang === "az" ? "sm:text-sm mt-16" : "sm:text-sm"}>{t("block4p")}</p>
        </div>
      </div>
    </>
  );
};

export default Blocks;
