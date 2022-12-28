import React from "react";
import triangle from "../assets/img/triangle1.png";
import { useTranslation } from "react-i18next";
import "../i18n";

const Triangle = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container lg:px-16 p-4 mx-auto mt-20 relative -z-10">
        <div className="flex justify-between items-center py-4">
          <div className="w-full xl:w-[50%]">
            <h1 className="text-4xl leading-16 lg:text-3xl font-bold text-[#371d6a]">
              {t("Meta")}
            </h1>
            <p className="my-4 font-light leading-[32px] text-md">{t("p1")}</p>
            <p className="font-light leading-[32px] text-md">{t("p2")}</p>
            <div className="w-full mt-8 ">
              <div className="xl:absolute 2xl:left-[750px] 2xl:top-[520px] xl:left-[580px] xl:top-[450px] top-[353px] left-[470px] xl:w-[17%] w-full">
                <h1 className="text-[#000048] text-xl text-center">
                  {t("theory")}
                </h1>
                <p className="font-light mb-4 lg:text-sm leading-6 text-center sm:text-xl">{t("th_p")}</p>
              </div>
              <div className="xl:absolute 2xl:left-[1100px] 2xl:top-[-30px] xl:left-[950px] xl:top-[50px] top-[10px] left-[800px] xl:w-[17%] w-full">
                <h1 className="text-[#0089c7] text-xl text-center ">
                  {t("experience")}
                </h1>
                <p className="font-light mb-4 lg:text-sm leading-6 sm:text-xl text-center">{t("exp_p")}</p>
              </div>
              <div className=" xl:absolute 2xl:left-[1210px] 2xl:top-[470px] xl:left-[980px] xl:top-[470px] top-[470px] left-[800px] xl:w-[17%] w-full">
                <h1 className="text-[#7fc4f3] text-xl text-center">
                  {t("opportunity")}
                </h1>
                <p className="font-light lg:text-sm sm:text-xl mb-4 leading-6  text-center">{t("opp_p")}</p>
              </div>
            </div>
          </div>
          <div className="xl:w-[50%] hidden xl:flex ml-[200px] ">
            <img src={triangle} alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Triangle;
