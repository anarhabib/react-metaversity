import React from "react";
import mainbg from "../assets/img/mb.png";
import { useTranslation } from "react-i18next";


const FutureTechnology = () => {

  const { t } = useTranslation();


  return (
    <>
      <div className="container mx-auto px-4 lg:px-16 pt-36 pb-12 -z-10">
        <div className="flex justify-center items-center w-full">
          <div className="flex-column justify-center items-center">
            <h1 className="lg:text-5xl text-3xl font-bold text-[#371d6a] lg:leading-[68px]">
              {t("future")}
            </h1>
            <p className="mt-4 text-xl font-light">
             {t("futurep")}
            </p>
          </div>
          <div className="ml-24 hidden  lg:block">
            <img src={mainbg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureTechnology;
